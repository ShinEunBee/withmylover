import type { App } from "../app/app";
import { Page } from "../app/page";
import type { Router } from "../app/router";
import { Button } from "../components/button";
import { FrameItem } from "../components/frameItem";

export class FrameSelectPage extends Page {
    constructor(router: Router, app: App) {
        const container = document.createElement("div");

        const selectedImage = app.selectedImageValue;

        if (!selectedImage) {
            container.innerHTML = `<p>선택된 사진이 없습니다. 사진 선택 페이지로 이동해주세요.</p>`;
            super(container);
            return;
        }  

        const imageUrl = URL.createObjectURL(selectedImage);

        container.innerHTML = `
            <div>
                <img src="${imageUrl}" style="max-width: 100%; border: 1px solid #ccc;" />
            </div>
        `;

        super(container);

        const frames = [
            { id: "frame_1", src: "../frames/frame_1.png" },
            { id: "frame2", src: "/frames/frame2.png" },
        ];

        frames.forEach(frame => {
            const item = new FrameItem(frame, () => {
                app.selectedFrameValue = frame.id;
                console.log("선택됨:", frame.id);
            });
            item.mount(container);
        });


        const nextButton = new Button(
            this.tag,
            "다음으로",
            () => {
                router.navigate("/result");
            }
        )

        nextButton.mount();
    }
}