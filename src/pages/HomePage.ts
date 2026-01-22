import { Page } from "../app/page";
import type { Router } from "../app/router";
import { Button } from "../components/button";
import { Header } from "../components/header";

export class HomePage extends Page {
    constructor(router: Router) {
        const container = document.createElement("div");
        container.className = "app-container";
        super(container);

        const header = new Header(
            this.tag,
            "Home"
        );

        header.mount();

        const section = document.createElement("section");
        section.className = "btn-container";

        const startButton = new Button(
            section,
            "시작하기",
            () => {
                router.navigate("/photo-select");
            }
        );

        container.append(section);
        startButton.mount();
    }
}
