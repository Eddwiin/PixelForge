import init, {invert_colors} from '../pixelforge_core/pkg/pixelforge_core';

async function run() {
    await init();

    const upload = document.getElementById('upload');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    upload.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const img = new Image();

        img.src = URL.createObjectURL(file);
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            invert_colors(canvas.width, canvas.height, imageData.data);
            ctx.putImageData(imageData, 0, 0);
        }
    });
}

run();