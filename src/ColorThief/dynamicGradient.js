import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

const dynamicGradient = (image) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.addEventListener('load', function() {
        colorThief.getColor(img);
    });
    img.crossOrigin = 'Anonymous';
    img.src = `${image.img}`
    let background = document.querySelector(".album-page--container ");
    let color = colorThief.getColor(img);
    // console.log(color)
    let foundColor = "rgb(" + color + ")"
    background.style.background = `linear-gradient(${foundColor}, #262222 60%, #121212 70%)`    
}

export default dynamicGradient