export class Button {
    private root: HTMLElement;
    private text: string;
    private onClick: () => void;
    private className?: string;

    private button: HTMLButtonElement;

    constructor(
        root: HTMLElement,
        text: string,
        onClick: () => void,
        className?: string
    ) {
        this.root = root;
        this.text = text;
        this.onClick = onClick;
        this.className = className;
        
        this.button = document.createElement("button");
        this.button.textContent = text;
        if (className) this.button.classList.add(className);
    }

    mount() {
        this.button.addEventListener("click", this.onClick);
        this.root.appendChild(this.button);
    }

    unmount() {
        this.button.removeEventListener("click", this.onClick);
        this.root.removeChild(this.button);
    }
}
