
import { NavLink } from "react-router-dom"

export default function SubredditLink(props) {
    const {item} = props
    return (
        <NavLink to={`/r/${item}`} className={({ isActive }) => `is-flex navbar-item is-rounded is-block mx-4 my-2 ${isActive ? 'is-active has-background-light has-text-info' : 'has-text-light is-bordered'}`}>
            <p className="ml-4">
                /r/{item}
                </p>
                {props.children}
        </NavLink>
    )
}