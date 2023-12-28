import { useEffect, useState } from "react";
import Header from "./components/header";
import WelcomePage from "./components/welcome-page";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Footer from "./components/footer";

import './app.css'

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  return (
    <>
      <div className="container grid">
        <Header token={token} setToken={setToken} />
        <Navigation token={token} />
        {token ? <Main token={token} /> : <WelcomePage />}
        <Footer />
      </div>
    </>
  );
}

export default App;
