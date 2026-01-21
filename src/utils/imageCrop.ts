const TARGET_WIDTH = 55;
const TARGET_HEIGHT = 85;
const TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT;

export function imageCrop(
    image: HTMLImageElement,
    outputWidth = 550,
    outputHeight = 850
): Promise<Blob> {
    const srcWidth = image.width;
    const srcHeight = image.height;
    const srcRatio = srcWidth / srcHeight;

    let cropWidth: number;
    let cropHeight: number;

    if (srcRatio > TARGET_RATIO) {
        cropHeight = srcHeight;
        cropWidth = srcHeight * TARGET_RATIO;
    }

    else {
        cropWidth = srcWidth;
        cropHeight = srcWidth / TARGET_RATIO;
    }

    const cropX = (srcWidth - cropWidth) / 2;
    const cropY = (srcHeight - cropHeight) / 2;

    const canvas = document.createElement("canvas");
    canvas.width = outputWidth;
    canvas.height = outputHeight;

    const ctx = canvas.getContext("2d")!;

    ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        outputWidth,
        outputHeight
    );

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob!);
        }, "image/png");
    });
}

