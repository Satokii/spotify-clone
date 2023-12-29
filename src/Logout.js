const Logout = (setToken) => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  export default Logout