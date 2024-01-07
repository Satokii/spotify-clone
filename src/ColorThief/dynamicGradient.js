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
    let colour = colorThief.getColor(img);
    let foundColour = "rgb(" + colour + ")"
    let darkFoundColour = "rgb(" + colour + ", 0.5)"
    let darkerFoundColour = "rgb(" + colour + ", 0.4)"
    let evenDarkerFoundColour = "rgb(" + colour + ", 0.2)"
    background.style.background = `linear-gradient(${foundColour}, ${darkFoundColour} 37.2%, ${darkerFoundColour} 37.2%, ${evenDarkerFoundColour}, #1a1a1a 60%, #121212 80%)`    
}

export default dynamicGradient