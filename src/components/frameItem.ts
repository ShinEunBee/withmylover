type Frame = {
    id: string,
    src: string
};

export class FrameItem {
    private root: HTMLDivElement;
    private img: HTMLImageElement;
    readonly frameId: string;

    constructor(frame: Frame, onSelect: (item: FrameItem) => void) {
        this.frameId = frame.id;

        this.root = document.createElement("div");
        this.root.className = "frame-item";

        this.img = document.createElement("img");
        this.img.src = frame.src;

        this.root.appendChild(this.img);

        this.root.addEventListener("click", () => {
            onSelect(this);
        });
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.root);
    }

    select() {
        this.root.classList.add("is-selected");
    }

    deselect() {
        this.root.classList.remove("is-selected");
    }
}