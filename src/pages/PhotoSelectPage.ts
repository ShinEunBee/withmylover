import { Page } from "../app/page";
import { Button } from "../components/button";
import type { Router } from "../app/router";
import type { App } from "../app/app";
import { imageCrop } from "../utils/imageCrop";

export class PhotoSelectPage extends Page {
    private fileInput: HTMLInputElement;
    private previewImg: HTMLImageElement;

    constructor(router: Router, app: App) {
        const container = document.createElement("div");

        container.innerHTML = `
            <h2>사진을 등록하세요!</h2>

            <input type="file" accept="image/*" style="display:none" />

            <div>
                <p>미리보기</p>
                <img style="max-width: 100%; border: 1px solid #ccc;" />
            </div>
        `;

        super(container);

        this.fileInput = container.querySelector("input")!;
        this.previewImg = container.querySelector("img")!;

        const selectButton = new Button(
            container,
            "사진 선택하기",
            () => {
                this.fileInput.click();
            }
        );

        const nextButton = new Button(
            this.tag,
            "다음으로",
            () => {
                router.navigate("/frame-select");
            }
        );

        selectButton.mount();
        nextButton.mount();

        this.fileInput.addEventListener("change", () => {
            const file = this.fileInput.files?.[0];
            if (!file) return;

            const image = new Image();
            image.src = URL.createObjectURL(file);

            image.onload = async () => {
                const croppedBlob = await imageCrop(image);

                const croppedFile = new File(
                    [croppedBlob],
                    "cropped.png",
                    { type: "image/png", lastModified: Date.now() }
                );

                app.selectedImageValue = croppedFile;
            };

            const reader = new FileReader();
            reader.onload = () => {
                this.previewImg.src = reader.result as string;
            };
            reader.readAsDataURL(file);
        });
    }
}
