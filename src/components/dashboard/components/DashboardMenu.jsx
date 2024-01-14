import BackArrow from "../../../assets/svgs/main-app/back-arrow.svg"
import ForwardArrow from "../../../assets/svgs/main-app/forward-arrow.svg"

import "../styles/dashboard-menu.css"

function DashboardMenu() {

    return (
        <section className="dashboard--menu grid">
            <div className="main-page-nav-container grid">
                <img className="main-page-nav--back-arrow" src={BackArrow} alt="" />
                <img className="main-page-nav--forward-arrow" src={ForwardArrow} alt="" />
            </div>
            <div></div>
        </section>
    )
}

export default DashboardMenu