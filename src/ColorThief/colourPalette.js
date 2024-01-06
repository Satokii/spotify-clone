import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

// FUNC TO GET THE PALETTE
// change second parameter in colorThief function to alter number of colours returned
const colourPalette = (imgage) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.addEventListener('load', function() {
        colorThief.getColor(img);
    });
    img.crossOrigin = 'Anonymous';
    img.src = `${imgage.img}`
    let imgPalette = colorThief.getPalette(img, 20);
    return imgPalette
}

// FUNC TO BLEND COLOURS RETURNED FROM PALETTE
const blendColour = (paletteArr) => {
  let r = 0
  let g = 0
  let b = 0
  paletteArr.map(colour => {
    r += colour[0]
    g += colour[1]
    b += colour[2]
  })
  return `rgb(${(r/20).toFixed(0)}, ${(g/20).toFixed(0)}, ${(b/20).toFixed(0)})`
}

// FUNCTION TO CREATE LINEAR GRADIENT AND SET TO BG
const dynamicGradient = () => {
  let background = document.querySelector(".album-page--container");
  const blendedImgColour = blendColour(colourPalette())
  console.log(blendedImgColour)
  background.style.background = `linear-gradient(${blendedImgColour}, #262222 60%, #121212 70%)`    
}