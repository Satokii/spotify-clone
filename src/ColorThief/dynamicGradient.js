import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

const dynamicGradient = (image) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.addEventListener('load', function() {
        colorThief.getColor(img);
    });
    img.crossOrigin = 'Anonymous';
    img.src = `${image.img}`
    let bannerBackground = document.querySelector(".album-page--banner");
    let albumBackground = document.querySelector(".album-page--sub-container");
    let colour = colorThief.getColor(img);
    let foundColour = "rgb(" + colour + ")"
    let darkFoundColour = "rgb(" + colour + ", 0.53)"
    let darkerFoundColour = "rgb(" + colour + ", 0.35)"
    let evenDarkerFoundColour = "rgb(" + colour + ", 0.2)"
    bannerBackground.style.background = `${foundColour}`  
    albumBackground.style.background = `linear-gradient(${darkFoundColour}, ${darkerFoundColour} 8%, ${evenDarkerFoundColour} 20%, #1a1a1a 42%, #121212 60%)`  
}

export default dynamicGradient