function Authorisation() {
  const CLIENT_ID = "04e1410dfac14d27968c7ef88c68d41c";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "user-top-read user-read-recently-played user-read-currently-playing user-read-playback-state";
  const RESPONSE_TYPE = "token";
  const SHOW_DIALOG = true;

  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}`}
    >
      Login to Spotify
    </a>
  );
}

export default Authorisation;
