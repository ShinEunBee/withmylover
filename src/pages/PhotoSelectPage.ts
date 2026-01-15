import { Page } from "../app/page";
import { Button } from "../components/button";

export class PhotoSelectPage extends Page {
    private fileInput: HTMLInputElement;
    private previewImg: HTMLImageElement;

    constructor() {
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

        selectButton.mount();

        this.fileInput.addEventListener("change", () => {
            const file = this.fileInput.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                this.previewImg.src = reader.result as string;
            };
            reader.readAsDataURL(file);
        });
    }
}
