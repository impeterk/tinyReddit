import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="columns is-mobile has-text-centered mb-4 is-size-5 is-family-monospace has-text-weight-semibold ">
            <NavLink to='/about' className={({isActive}) => `navbar-item column is-rounded is-half ${isActive ? 'is-active has-text-info has-background-light' : 'has-text-light '}`}>About</NavLink>
            <a id="githublink" className="column is-half is-rounded has-text-light" href="https://github.com/impeterk">Github</a>
        </footer>
    )
}