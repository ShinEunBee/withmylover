import { Page } from "../app/page";
import { Button } from "../components/button";
import type { Router } from "../app/router";
import type { App } from "../app/app";
import { imageCrop } from "../utils/imageCrop";
import { Header } from "../components/header";

export class PhotoSelectPage extends Page {
    private fileInput: HTMLInputElement;
    private previewImg: HTMLImageElement;

    constructor(router: Router, app: App) {
        const container = document.createElement("main");
        container.className = "app-container";

        container.innerHTML = `
            <div class="main-container">
                <h2>사진을 등록하세요!</h2>
                <div id="select-btn-container"></div>
	
                <input type="file" accept="image/*" style="display:none" />

                <div>
                    <img style="max-width: 100%; border: 1px solid #ccc;"/>
                </div>
            </div>
        `;

        super(container);

        const header = new Header(
            this.tag,
            "사진 선택"
        );

        header.mount();

        this.fileInput = container.querySelector("input")!;
        this.previewImg = container.querySelector("img")!;

        const selectButton = new Button(
            container.querySelector("#select-btn-container")!,
            "사진을 선택하세요!",
            () => {
                this.fileInput.click();
            },
            "photo-select"
        );

        const section = document.createElement("section");
        section.className = "btn-container";

        const nextButton = new Button(
            section,
            "다음으로",
            () => {
                router.navigate("/frame-select");
            }
        );

        selectButton.mount();

        container.append(section);
        nextButton.mount();

        this.fileInput.addEventListener("change", async () => {
            const file = this.fileInput.files?.[0];
            if (!file) return;

            const previewUrl = URL.createObjectURL(file);
            this.previewImg.src = previewUrl;
            selectButton.setText("이미지 처리 중...");

            const image = new Image();
            const processUrl = URL.createObjectURL(file);
            image.src = processUrl;

            await new Promise((resolve, reject) => {
                image.onload = resolve;
                image.onerror = reject;
            });

            try {
                const croppedBlob = await imageCrop(image);

                const croppedFile = new File(
                    [croppedBlob],
                    "cropped.png",
                    { type: "image/png", lastModified: Date.now() }
                );

                app.selectedImageValue = croppedFile;
                selectButton.setText("사진 다시 선택하기");

            } finally {
                URL.revokeObjectURL(processUrl);
            }
        });
    }
}