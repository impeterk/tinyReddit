import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectNavBarMenu,toggleMenu } from "@/components/layout/navBar/navBarSlice"
export default function Search(props) {
    const dispatch = useDispatch()
    const showMobileNav = useSelector(selectNavBarMenu)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')


    const handleInputChange = (e) => {
        setSearch(() => {
            return e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const searchQuery = {
            q: search
        }
        const query = createSearchParams(searchQuery)

        setSearch(() => {
            return ''
        })
        navigate({
            pathname: '/search',
            search: `?${query}`
        })

        if (showMobileNav == true) {
            dispatch(toggleMenu())
            console.log('clicked')
        }

    }


    return (
        <form className="control has-icons-left has-icons-right is-flex is-sticky search" onSubmit={handleSubmit}>
            <input onChange={handleInputChange} className="input is-info has-background-info-light" value={search} type="text" placeholder="Search" />
            <span className="ml-3 icon is-left">
                <FontAwesomeIcon className="has-text-info mr-4" icon={faSearch} />
            </span>
            <button
                className={`button is-${props.buttonColor || 'info'} has-text-weight-bold is-family-monospace`}
                disabled={search ? false : true} >
                Submit
            </button>
        </form>
    )

}