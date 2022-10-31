import Button from "./Button"

export default function Navbar(props) {

    const openCloseMenu = () => {
        let burger = document.getElementById("navBurger")
        let menu = document.getElementById("navbarMenu")
        burger.className === "navbar-burger is-active" ? burger.className = "navbar-burger" : burger.className = "navbar-burger is-active"
        menu.className === "navbar-menu is-active" ? menu.className = "navbar-menu" : menu.className = "navbar-menu is-active"
    }


    return (
        <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <p className="is-size-2 has-text-weight-semibold mx-5">tinyReddit</p>

    <a role="button" className="navbar-burger " id="navBurger" onClick={openCloseMenu} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarMenu" className="navbar-menu">
    <div className="navbar-start">
        <div className="navbar-item">
        <input className="input is-info" type="text" placeholder="popular" />
        </div>
      <a className="navbar-item">
        New Subreddit
      </a>
      <div className="navbar-item">
      <p className="is-size-3 is-uppercase has-text-weight-semibold mx-5">{props.subreddit}</p>
        </div>
    </div>
    <div className="navbar-end mx-5">
      <div className="navbar-item mx-5">
        <input className="input is-info" type="text" placeholder="Search" />
        </div>
        <a className="navbar-item">
            Listing
        </a>
        <div className="is-flex is-flex-direction-row is-justify-content-center">
    <div className="navbar-item px-1">
    <button className="button">hot</button>
    </div>
    <div className="navbar-item px-1">
    <button className="button">new</button>
    </div>
    <div className="navbar-item px-1">
    <button className="button">best</button>
    </div>
    </div>
    </div>
  </div>
</nav>
    )
}