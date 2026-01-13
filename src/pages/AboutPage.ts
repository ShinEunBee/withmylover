import { Page } from "../app/page";

export class AboutPage extends Page{
    constructor(){
        const container = document.createElement("div");
        container.innerHTML = `
            <h1>About</h1>
            <p>SPA 만들어봐요</p>
            <a href="/" data-link="/">Home</a>
        `;

        super(container);
    }
}