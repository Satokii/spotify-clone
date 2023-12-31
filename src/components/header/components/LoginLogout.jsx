import Logout from "../../../Logout";
import Authorisation from "../../../Authorisation";

import "../styles/login-logout.css"

function LoginLogout({ token, setToken }) {
  const logout = () => {
    Logout(setToken);
    window.localStorage.removeItem("token");
  };

  return (
    <section className="header--login-logout-container">
      {!token ? (
        <Authorisation />
      ) : (
        <p className="header--logout-link" onClick={logout}>
          Logout
        </p>
      )}
    </section>
  );
}

export default LoginLogout;
