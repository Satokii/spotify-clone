const paletteGradientUserPlaylist = (data) => {
    const imgColour = data.lightVibrant

    let navBackgroundBacker = document.querySelector(".user-playlist--menu-backing")
    let navBackground = document.querySelector(".user-playlist--menu-container")
    let bannerBackground = document.querySelector(".user-playlist--banner");
    let albumBackground = document.querySelector(".user-playlist--sub-container");
    let foundColour = `${imgColour}`;
    let darkFoundColour = `${imgColour}70`;
    let darkerFoundColour = `${imgColour}55`;
    let evenDarkerFoundColour = `${imgColour}33`;
  
    const scrolled = document.querySelector('.scrollbar-user-playlist')
    scrolled.addEventListener('scroll', () => {
        if (scrolled.scrollTop <= 30) {
          navBackgroundBacker.style.background = 'transparent'
          navBackground.style.backgroundColor = 'transparent'
        }
        else if (scrolled.scrollTop > 30 && scrolled.scrollTop <= 100) {
          navBackgroundBacker.style.background = '#12121219'
          navBackground.style.backgroundColor = `${foundColour}40`
        }
        else if (scrolled.scrollTop > 100 && scrolled.scrollTop <= 200) {
          navBackgroundBacker.style.background = '#1212127e'
          navBackground.style.backgroundColor = `${foundColour}82`
        }
        else if (scrolled.scrollTop > 200 && scrolled.scrollTop <= 300) {
          navBackgroundBacker.style.background = '#121212af'
          navBackground.style.backgroundColor = `${foundColour}CC`
        }
        else {
          navBackgroundBacker.style.background = '#121212'
          navBackground.style.backgroundColor = `${foundColour}`
        }
    });
  
    bannerBackground.style.background = `${foundColour}`;
    albumBackground.style.background = `linear-gradient(${darkFoundColour}, ${darkerFoundColour} 5%, ${evenDarkerFoundColour} 10%, #1a1a1a 20%, #121212 30%)`;  
}

export default paletteGradientUserPlaylist