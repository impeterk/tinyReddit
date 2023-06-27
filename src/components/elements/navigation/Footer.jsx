import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="columns is-mobile has-text-centered mb-4 is-size-5 is-family-monospace has-text-weight-semibold ">
            <NavLink to='/about' className={({isActive}) => `navbar-item column is-rounded is-half ${isActive ? 'is-active has-text-info has-background-light' : 'has-text-light '}`}>About</NavLink>
            <a id="githublink" className="column is-flex is-justify-content-space-evenly is-half is-rounded has-text-light" target="_blank" href="https://github.com/impeterk/tinyreddit">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
                <span>Github</span>
                </a>
        </footer>
    )
}