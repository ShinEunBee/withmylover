import { Page } from "../app/page";

export class HomePage extends Page {
    constructor() {
        const container = document.createElement("div");
        container.innerHTML = `
            <h1>Home</h1>
            <p>환영합니당</p>
        `;

        super(container);
    }
}