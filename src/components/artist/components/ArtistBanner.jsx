import VerifiedIcon from "../../../assets/svgs/main-app/verified-icon.svg"

import "../styles/artist-banner.css"

function ArtistBanner({ artistInfo }) {

    return (
        <div className="artist-page--banner-container grid" style={{ backgroundImage: `url(${artistInfo.img})`, backgroundPosition: "50% 30%", backgroundRepeat: "no-repeat", backgroundSize: "80%"}}>
            <div className="artist-banner--verified-container grid">
                <img className="artist-banner--verified-img" src={VerifiedIcon} alt="verified icon" />
                <p className="artist-banner--verified-text">Verified Artist</p>
            </div>
            <div className="artist-banner--artist-name grid ">{artistInfo.name}</div>
                <div className="artist-banner--artist-followers">{`${artistInfo.followers} followers`}</div>
        </div>
    )
}

export default ArtistBanner