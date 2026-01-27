type Frame = {
    id: string,
    src: string
};

export class FrameItem {
    private element: HTMLImageElement;
    readonly frameId: string;

    constructor(frame: Frame, onSelect: (item: FrameItem) => void) {
        this.frameId = frame.id;

        this.element = document.createElement("img");
        this.element.src = frame.src;
        this.element.addEventListener("click", () => {
            onSelect(this);
        });
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.element);
    }

    select() {
        this.element.classList.add("is-selected");
    }

    deselect() {
        this.element.classList.remove("is-selected");
    }

}