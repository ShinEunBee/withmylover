export class Page {
    private tag: HTMLElement;

    constructor(tag: HTMLElement) {
        this.tag = tag;
    }

    get element() {
        return this.tag;
    }

    mount() {
        console.log("monnt", this.element);
    }

    unmount() {
        console.log("unmonnt", this.element);
    }
}