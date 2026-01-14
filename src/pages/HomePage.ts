import { Page } from "../app/page";
import { Button } from "../components/button";

export class HomePage extends Page {
    constructor() {
        const container = document.createElement("div");

        container.innerHTML = `
            <h1>Home</h1>
            <p>환영합니당</p>
        `;

        super(container);

        const startButton = new Button(
            this.tag,
            "시작하기",
            () => {
                console.log("시작 버튼 클릭");
            }
        );

        startButton.mount();
    }
}
