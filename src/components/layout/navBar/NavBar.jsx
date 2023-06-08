import SubredditList from "@/components/navigation/subredditList/SubredditList"
import Footer from "@/components/navigation/Footer"
import { selectNavBarMenu, toggleMenu } from "./navBarSlice"
import { useDispatch, useSelector } from "react-redux"
import Search from "../../elements/Search/Search"

export default function NavBar() {
    const dispatch = useDispatch()
    const showMobileNav = useSelector(selectNavBarMenu)
    function handleClick() {
        dispatch(
            toggleMenu()
        )
    }

    return (
        <div className="container m-0 is-family-monospace">
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item is-size-4" >
                        {`<React 2 Reddit />`}
                    </p>

                    <a role="button" onClick={handleClick} className={`navbar-burger ${showMobileNav ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="mobileNavMenu" className={`navbar-menu m-0 p-0 animate__animated ${showMobileNav ? 'is-active is-flex hero is-fullheight-with-navbar has-background-info animate__slideInLeft' : ''}`}>
                    <div className="navbar-start">
                        <div className="m-4">
                            <Search buttonColor='info is-light'/>
                        </div>
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