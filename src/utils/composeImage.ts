export function composeImage(
    userImage: HTMLImageElement,
    frameImage: HTMLImageElement,
    width: number,
    height: number
): HTMLCanvasElement {

    console.log("composeImage called"); 
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;

    console.log("Composing images with size:", width, height);

    ctx.drawImage(userImage, 0, 0, width, height);

    ctx.drawImage(frameImage, 0, 0, width, height);

    return canvas;
}
