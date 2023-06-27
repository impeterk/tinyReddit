
import { NavLink } from "react-router-dom"
import { selectNavBarMenu,toggleMenu } from "/src/components/layout/navBar/navBarSlice"
import { useDispatch, useSelector } from "react-redux"

export default function SubredditLink(props) {
    const dispatch = useDispatch()
    const showMobileNav = useSelector(selectNavBarMenu)

    const handleLinkClick = () => {
        if (showMobileNav == true) {
            dispatch(toggleMenu())
            console.log('clicked')
        }
    }

    const {item} = props
    return (
        <NavLink to={`/r/${item}`} className={({ isActive }) => `is-flex navbar-item is-bordered is-rounded is-block ml-auto my-2 pr-auto ${isActive ? 'is-active has-background-info-light has-text-info' : 'has-text-light'}`} onClick={handleLinkClick}>
            <p className="ml-4">
                /r/{item}
                </p>
                {props.children}
        </NavLink>
    )
}