export class Header {
    private root: HTMLElement;
    private header: HTMLElement;

    constructor(root: HTMLElement, text: string) {
        this.root = root;

        this.header = document.createElement("header");

        this.createLayout(text);
    }

    private createLayout(text: string) {
        const back = document.createElement("div");
        back.textContent = "";

        const title = document.createElement("h1");
        title.textContent = text;

        this.header.append(back, title);
    }

    mount() {
        this.root.prepend(this.header);
    }

    unmount() {
        this.root.removeChild(this.header);
    }
}