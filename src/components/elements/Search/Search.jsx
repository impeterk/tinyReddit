import { useNavigate, createSearchParams } from "react-router-dom";
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search(props) {

    const navigate = useNavigate()
    const searchRef = useRef()
    const onSearchChange = (e) => {

        const searchQuery = {
            q: searchRef.current.value
        }
        const query = createSearchParams(searchQuery)

        navigate({
            pathname: '/search',
            search: `?${query}`
        })

    }


    return (
        <div className="control has-icons-left has-icons-right is-flex is-sticky search">
            <input onChange={onSearchChange} ref={searchRef} className="input is-info" type="text" placeholder="Search" />
            <span className="ml-3 icon is-left">
                <FontAwesomeIcon className="has-text-info" icon={faSearch} />
            </span>
                <button className={`button is-${props.buttonColor || 'info'} hax-text-weight-bold is-family-monospace`}>Submit</button>
        </div>
    )

}