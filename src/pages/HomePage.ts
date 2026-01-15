import { Page } from "../app/page";
import type { Router } from "../app/router";
import { Button } from "../components/button";

export class HomePage extends Page {
    constructor(router: Router) {
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
                router.navigate("/photo-select");
            }
        );

        startButton.mount();
    }
}
