import type { App } from "../app/app";
import { Page } from "../app/page";
import type { Router } from "../app/router";
import { Button } from "../components/button";
import { FrameItem } from "../components/frameItem";
import { Header } from "../components/header";

export class FrameSelectPage extends Page {
    constructor(router: Router, app: App) {
        let selectedItem: FrameItem | null = null;

        const container = document.createElement("div");
        container.className = "app-container";

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

        const header = new Header(
            this.tag,
            "프레임 선택"
        );

        header.mount();

        const frames = [
            { id: "frame_1", src: "../frames/frame_1.png" },
            { id: "frame_2", src: "../frames/frame_2.png" },
        ];

        frames.forEach(frame => {
            const item = new FrameItem(frame, clickedItem => {
                app.selectedFrameValue = clickedItem.frameId;

                selectedItem?.deselect();
                clickedItem.select();
                selectedItem = clickedItem;
            });

            item.mount(container);
        });

        const section = document.createElement("section");
        section.className = "btn-container";

        const nextButton = new Button(
            section,
            "다음으로",
            () => {
                router.navigate("/result");
            }
        );

        container.append(section);
        nextButton.mount();

        nextButton.mount();
    }
}