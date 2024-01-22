import getYear from "../../../shared-functions/getYear";
import convertMsToTime from "../../../shared-functions/convertMsToTime";
import albumTimeinMs from "../../../shared-functions/albumTimeinMs";

// import "../styles/album-banner.css"

function UserPlaylistBanner({ userPlaylistTracks }) {

  return (
    <div className="album-page--banner grid">
      <div className="album-page--banner-img-container">
        {albumInfo.img ? (
          <img
            className="album-page--img"
            src={albumInfo.img}
            alt={`${albumInfo.name}-image`}
          />
        ) : (
          <div className="album-page--img-none"></div>
        )}
      </div>
      <div className="album-page--banner-info-container grid">
        <p className="album-page--album-type">{albumInfo.type}</p>
        <p className="album-page--album-name">{albumInfo.name}</p>
        <div className="album-page--album-overview-container grid">
          <div className="album-overview-artist-img-container">
            {artistInfo.img ? (
              <img src={artistInfo.img} alt={`${artistInfo.name}-image`} />
            ) : (
              <div></div>
            )}
          </div>
          <p className="album-overview-artist-name">{artistInfo.name}</p>
          <span className="middot">&middot;</span>
          <p className="album-overview-release-year">
            {" "}
            {getYear(albumInfo.releaseDate)}{" "}
          </p>
          <span className="middot">&middot;</span>
          <p className="album-overview-total-tracks">{`${
            albumInfo.totalTracks
          } songs, ${convertMsToTime(albumTimeinMs(albumTracksArr))}`}</p>
        </div>
      </div>
    </div>
  )
}

export default UserPlaylistBanner;
