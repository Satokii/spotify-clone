import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import HomeActive from "../../../assets/svgs/main-app/home-active.svg"
import HomeInactive from "../../../assets/svgs/main-app/home-inactive.svg"
import SearchActive from "../../../assets/svgs/main-app/search-active.svg"
import SearchInactive from "../../../assets/svgs/main-app/search-inactive.svg"
import TopPlayedActive from "../../../assets/svgs/main-app/top-played-active.svg"
import TopPlayedInactive from "../../../assets/svgs/main-app/top-played-inactive.svg"


import "../styles/nav-main-links.css"

function NavMainLinks() {

    const INITIAL_NAV_LINK_STATE = [
        {
            name: "Home",
            className: "active-nav-link",
            isActive: true,
        },
        {
            name: "Search",
            className: "inactive-nav-link",
            isActive: false,
        },
        {
            name: "Top Played",
            className: "inactive-nav-link",
            isActive: false,
        }
    ]

    const [activeNavImg, setActiveNavImg] = useState('Home')
    const [activeNavLink, setActiveNavLink] = useState(INITIAL_NAV_LINK_STATE)

    const toggleActiveNav = (e) => {
        const updatedNav = activeNavLink.map(nav => {
            if (nav.name === e.target.innerText) {
                return { ...nav, isActive: true}
            }
            else {
                return { ...nav, isActive: false}
            }
        })
        setActiveNavLink(updatedNav)
    }

    useEffect(() => {
        const activeNav = activeNavLink.find(nav => nav.isActive === true)
        setActiveNavImg(activeNav.name)
    }, [activeNavLink])

    return (
        <div className='navigation--main-links-container grid'>
            {/* <li className="navigation--main-links-home">
                {homeActive ?
                <img className="navigation--main-links-home-icon-active" src={HomeActive} alt="home icon active" />
                : <img src={HomeInactive} alt="home icon inactive" />
                }
                <div>Home</div>
            </li>
            <li>Search</li>
            <li>Most Played</li> */}
            <ul className="navigation--main-links-icons-container grid">
                <li className="navigation--main-links-home-icons">
                    {activeNavImg === "Home" ? <img src={HomeActive} alt="home icon active" /> : <img src={HomeInactive} alt="home icon inactive" /> }
                </li>
                <li className="navigation--main-links-search-icons">
                    {activeNavImg === "Search" ? <img src={SearchActive} alt="home icon active" /> : <img src={SearchInactive} alt="home icon inactive" />}
                </li>
                <li className="navigation--main-links-top-played-icons">
                    {activeNavImg === "Top Played" ? <img src={TopPlayedActive} alt="home icon active" /> : <img src={TopPlayedInactive} alt="home icon inactive" />}
                </li>
            </ul>
            <ul className="navigation--main-links-text-container grid">
                {activeNavLink.map((nav, index) => (
                    <li key={`${nav.name}-${index}`} onClickCapture={e => toggleActiveNav(e)}>
                        {nav.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default NavMainLinks