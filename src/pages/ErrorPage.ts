import { Page } from "../app/page";

export class ErrorPage extends Page {
    constructor() {
        const container = document.createElement("div");
        container.innerHTML = `
            <h1>404 Not Found!!</h1>
        `;

        super(container);
    }
}