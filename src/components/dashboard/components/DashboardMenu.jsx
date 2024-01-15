import { useNavigate } from "react-router-dom"
import BackArrow from "../../../assets/svgs/main-app/back-arrow.svg"
import ForwardArrow from "../../../assets/svgs/main-app/forward-arrow.svg"
import ProfileIcon from "../../../assets/svgs/main-app/profile-icon.svg"
import LogOutBtn from "../../../assets/svgs/main-app/log-out.svg"
import NotificationBell from "../../../assets/svgs/main-app/noti-bell.svg"

import "../styles/dashboard-menu.css"

function DashboardMenu() {

    const navigate = useNavigate()

    const pageBack = () => {
        navigate(-1)
    }

    const pageForward = () => {
        navigate(1)
    }

    return (
        <section className="main-page--menu grid">
            <div className="main-page--nav-container grid">
                <div onClick={pageBack}>
                    <img className="main-page--nav-back-arrow" src={BackArrow} alt="back arrow" />
                </div>
                <div onClick={pageForward}>
                    <img className="main-page--nav-forward-arrow" src={ForwardArrow} alt="forward arrow"  />
                </div>
            </div>
            <div className="main-page--icons-container grid">
                <img src={NotificationBell} alt="notification bell" />
                <img className="main-page--profile" src={ProfileIcon} alt="profile icon" />
                <img className="main-page--log-out" src={LogOutBtn} alt="log out button" />
            </div>
        </section>
    )
}

export default DashboardMenu