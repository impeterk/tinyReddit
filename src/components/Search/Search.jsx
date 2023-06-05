import { useNavigate, createSearchParams } from "react-router-dom";
import { useRef } from 'react'
export default function Search() {

    const navigate = useNavigate()

    const searchRef = useRef()
    const onSearchChange = (e) => {

        const searchQuery = {
            q: searchRef.current.value
        }
        const query = createSearchParams(searchQuery)

        navigate({
            pathname: '/search',
            search:`?${query}`
        })

    }


    return (
        <div className="control px-2">
            <label htmlFor="" className="label has-text-grey-light">Search</label>
            <input onChange={onSearchChange} ref={searchRef} className="input is-info" type="text" placeholder="Search" />
        </div>
    )

}