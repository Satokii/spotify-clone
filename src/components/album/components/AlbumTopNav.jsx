import { useNavigate } from "react-router-dom"
import Logout from "../../../Logout"
import BackArrow from "../../../assets/svgs/main-app/back-arrow.svg"
import ForwardArrow from "../../../assets/svgs/main-app/forward-arrow.svg"
import NotificationBell from "../../../assets/svgs/main-app/noti-bell.svg"
import ProfileIcon from "../../../assets/svgs/main-app/profile-icon.svg"
import LogOutBtn from "../../../assets/svgs/main-app/log-out.svg"

import "../styles/album-top-nav.css"

function AlbumTopNav({ setToken }) {
    const navigate = useNavigate()

    return (
        <div className="album-page--menu-backing">
        <section className="album-page--menu-container grid">
            <div className="album-page--menu-nav-container grid">
              <div onClick={() => navigate(-1)}>
                <img src={BackArrow} alt="back arrow" />
              </div>
              <div onClick={() => navigate(1)}>
                <img src={ForwardArrow} alt="forward arrow" />
              </div>
            </div>
            <div className="album-page--icons-container grid">
                <div>
                    <img src={NotificationBell} alt="notification bell" />
                </div>
                <div>
                    <img className="album-page--profile" src={ProfileIcon} alt="profile icon" />
                </div>
                <div onClick={() => Logout(setToken)}>
                    <img className="album-page--log-out" src={LogOutBtn} alt="log out button" />
                </div>
            </div>
        </section>
        </div>
    )
}
export default AlbumTopNav