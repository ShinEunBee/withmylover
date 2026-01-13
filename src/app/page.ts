export class Page {
    private tag: HTMLElement;

    constructor(tag: HTMLElement) {
        this.tag = tag;
    }

    get element(){
        return this.tag;
    }

    mount() {

    }

    unmount() {

    }
}