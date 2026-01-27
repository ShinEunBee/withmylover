import { Page } from "../app/page";
import { composeImage } from "../utils/composeImage";
import { App } from "../app/app";

export class ResultPage extends Page {
    constructor(app: App) {
        const container = document.createElement("div");
        container.className = "app-container";

        const selectedImage = app.selectedImageValue;

        if (!selectedImage) {
            container.innerHTML = `<p>선택된 사진이 없습니다. 사진 선택 페이지로 이동해주세요.</p>`;
            super(container);
            return;
        }

        container.innerHTML = `
           <div class="loading">
		          <div class="spinner"></div>
		          <p>탑로더 끼우는 중 ...</p>
		        </div>
		
		        <div class="result hidden">
                <canvas></canvas>
            </div>
        `;

        super(container);

        const loadingEl = container.querySelector(".loading")!;
        const resultEl = container.querySelector(".result")!;
        const canvas = container.querySelector("canvas")!;
        const ctx = canvas.getContext("2d")!;

        const userImage = new Image();
        const frameImage = new Image();

        userImage.src = URL.createObjectURL(selectedImage);
        frameImage.src = app.selectedFrameValue!;

        Promise.all([
            new Promise<void>((resolve) => {
                userImage.onload = () => {
                    console.log("userImage loaded");
                    resolve();
                };
            }),
            new Promise<void>((resolve) => {
                frameImage.onload = () => {
                    console.log("frameImage loaded");
                    resolve();
                };
            }),
        ]).then(() => {
            setTimeout(() => {
                const composed = composeImage(userImage, frameImage, 550, 850);

                canvas.width = composed.width;
                canvas.height = composed.height;
                ctx.drawImage(composed, 0, 0);

                loadingEl.remove();
                resultEl.classList.remove("hidden");
            }, 800);
        });

    }
}