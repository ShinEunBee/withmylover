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
        return this.selectedFrame;
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