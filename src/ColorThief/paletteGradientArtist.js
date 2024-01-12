const palletGradientArtist = (data) => {
    const lightImgColour = data.darkMuted;
    const darkImgColour = data.vibrant;
    let mixedImgColour = "#";
  
    // FORMULA TO FIND MID-COLOUR OF VIBRANT AND LIGHT MUTED COLOURS RETURNED FROM
    // USEPALETTE HOOK
    for (let i = 0; i < 3; i++) {
      let sub1 = lightImgColour.substring(1 + 2 * i, 3 + 2 * i);
      let sub2 = darkImgColour.substring(1 + 2 * i, 3 + 2 * i);
      let v1 = parseInt(sub1, 16);
      let v2 = parseInt(sub2, 16);
      let v = Math.floor((v1 + v2) / 2);
      let sub = v.toString(16).toUpperCase();
      let padsub = ("0" + sub).slice(-2);
      mixedImgColour += padsub;
    }
  
    // SETTING BG COLOUR AND GRADIENT OF ALBUM PAGE
    let bannerBackground = document.querySelector(".artist-page--banner-container");
    let artistBackground = document.querySelector(".artist-page--sub-container");
    let foundColour = `${mixedImgColour}`;
    let darkFoundColour = `${mixedImgColour}80`;
    let darkerFoundColour = `${mixedImgColour}50`;
    let evenDarkerFoundColour = `${mixedImgColour}30`;
    bannerBackground.style.backgroundColor = `${foundColour}`;
    artistBackground.style.background = `linear-gradient(${darkFoundColour}, ${darkerFoundColour} 10%, ${evenDarkerFoundColour} 20%, #1a1a1a 42%, #121212 70%)`
  }
  
  export default palletGradientArtist;
  