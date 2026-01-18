type Frame = {
    id: string,
    src: string
};

export class FrameItem {
    private element: HTMLImageElement;

    constructor(frame: Frame, onSelect: () => void) {
        this.element = document.createElement("img");
        this.element.src = frame.src;
        this.element.addEventListener("click", onSelect);
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.element);
    }

}