import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search(props) {

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

        navigate({
            pathname: '/search',
            search: `?${query}`
        })

    }


    return (
        <form className="control has-icons-left has-icons-right is-flex is-sticky search" onSubmit={handleSubmit}>
            <input onChange={handleInputChange} className="input is-info" type="text" placeholder="Search" />
            <span className="ml-3 icon is-left">
                <FontAwesomeIcon className="has-text-info" icon={faSearch} />
            </span>
            <button
                className={`button is-${props.buttonColor || 'info'} has-text-weight-bold is-family-monospace`}
                disabled={search ? false : true} >
                Submit
            </button>
        </form>
    )

}