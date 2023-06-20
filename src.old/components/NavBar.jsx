import {useState} from 'react'

import Button from "../Helpers/Button"


// Navigation bar with search, new subreddit and Listing options
export default function Navbar(props) {
  const [value, setValue] = useState('')
  const [searchText, setSearchText] = useState('')

  // Interacts with menu for mobile. Opens and close on Click
    const openCloseMenu = () => {
        let burger = document.getElementById("navBurger")
        let menu = document.getElementById("navbarMenu")
        burger.className === "navbar-burger is-active" ? burger.className = "navbar-burger" : burger.className = "navbar-burger is-active"
        menu.className === "navbar-menu is-active" ? menu.className = "navbar-menu" : menu.className = "navbar-menu is-active"
    }

  // Sets new subreddit
  const handleSubmit = event => {
    event.preventDefault()
    if (value !== '') {
    props.setSubreddit(value)
    setValue('')
    setSearchText('')
    props.setSearch('')
    }
}
  // Handles value change for subreddit
  const handleValue = event => {
    setValue(event.target.value)
  }

  // Handles search change
  const handleSearch = event => {
    setSearchText(event.target.value)
    props.setSearch(searchText)
  }

  //scrolls to top
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }

    return (
        <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <p onClick={scrollToTop} className="is-clickable is-size-3 has-text-weight-semibold mx-5">{`<`}React<span className="has-text-info has-text-weight-bold">2</span>Reddit{` />`}</p>

    <a role="button" className="navbar-burger" id="navBurger" onClick={openCloseMenu} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarMenu" className="navbar-menu">
    <div className="navbar-start">
        <form className='navbar-item is-flex' onSubmit={handleSubmit}>
          <input className="input is-info" value={value} onChange={handleValue} type="text" placeholder={props.subreddit} />
          <button className="navbar-item button is-info is-inverted is-normal mx-1">
          New Subreddit
          </button >
        </form>
        <label className="navbar-item label mb-0 has-text-centered">
            Listing
        </label>
        <div className="is-flex is-flex-direction-row is-justify-content-center">
          <div className="navbar-item px-1">
            <Button value='hot' setListing={props.setListing} listing={props.listing} />
          </div>
          <div className="navbar-item px-1">
            <Button value='new' setListing={props.setListing} listing={props.listing} />
          </div>
          <div className="navbar-item px-1">
            <Button value='best' setListing={props.setListing} listing={props.listing} />
          </div>
        </div>
    </div>
    <div className="navbar-end mx-5">
      <div className="navbar-item">
        <input className="input is-info" type="text" value={searchText} onChange={handleSearch} placeholder="Search" />
      </div>
    </div>
  </div>
</nav>
    )
}