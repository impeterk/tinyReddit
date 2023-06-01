import { useState } from "react"
import SubredditList from "../navigation/SubredditList"
import Footer from "../navigation/Footer"

export default function NavBar() {
    const [showMobileNav, setShowMobileNav] = useState(false)
    function handleClick() {
        setShowMobileNav(prev => !prev)
    }

    return (
        <div className="container m-0">
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" onClick={handleClick} className={`navbar-burger ${showMobileNav ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="mobileNavMenu" className={`navbar-menu m-0 p-0 animate__animated ${showMobileNav ? 'is-active is-flex hero is-fullheight-with-navbar has-background-info animate__slideInLeft' : ''}`}>
                    <div className="navbar-start">
                        <SubredditList />
                    </div>

                    <div className="navbar-end mt-auto">
                        <Footer />
                    </div>
                </div>
            </nav>
        </div>
    )
}