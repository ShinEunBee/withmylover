import { Page } from "../app/page";
import type { Router } from "../app/router";
import { Button } from "../components/button";
export class HomePage extends Page {
    constructor(router: Router) {
        const container = document.createElement("div");
        container.className = "home";

        container.innerHTML = `
		        <h1 class="home-title">
                    아맞다!<br />
                    예절샷
                </h1>

                <p class="home-desc">
                    1. 사진 고르기<br />
                    2. 프레임 고르기<br />
                    3. 예절샷 찍기
                </p>
        `;

        super(container);

        const startButton = new Button(
            container,
            "시작하기",
            () => {
                router.navigate("/photo-select");
            },
            "home-btn"
        );
        startButton.mount();
    }
}