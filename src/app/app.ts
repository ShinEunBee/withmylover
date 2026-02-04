const FRAME_MAP: Record<string, string> = {
    frame_1: "/frames/frame_1.png",
    frame_2: "/frames/frame_2.png",
};

export class App {
    private selectedImage: File | null = null;
    private selectedFrame: string | null = null;
    private resultImage: HTMLCanvasElement | null = null;


    get selectedImageValue() {
        return this.selectedImage;
    }

    set selectedImageValue(image: File | null) {
        this.selectedImage = image;
    }

    get selectedFrameValue() {
        if (!this.selectedFrame) return null;
        return FRAME_MAP[this.selectedFrame as keyof typeof FRAME_MAP];
    }

    set selectedFrameValue(image: string | null) {
        this.selectedFrame = image;
    }

    get resultImageValue() {
        return this.resultImage;
    }

    set resultImageValue(canvas: HTMLCanvasElement | null) {
        this.resultImage = canvas;
    }
}