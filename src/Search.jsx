import { useEffect } from 'react'
import {useState} from 'react'
import Data from './Data'
import SearchComponent from './SearchComponent'


export default function Search(props) {
    const [subreddit, setSubreddit] = useState('popular')
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        async function showSearchResults() {
            let response = await fetch(`/api/search.json?q=${search}`)
            let responseJSON = await response.json()
            setSearchResults(responseJSON)
        }
        showSearchResults()
    },[search])


    const handleSubmit = event => {
        event.preventDefault()
        if (value !== '') {
        setSubreddit(value)
        setValue('')
        setSearchResults(null)
        setSearch('')
        }
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleSearch = event => {
        setSearch(event.target.value)
    }
    return(
        <div className="is-flex is-flex-direction-column">
            <h1 className='is-size-1 has-text-light my-3'>{subreddit.toLocaleUpperCase()}</h1>
        <form className="is-flex is-justify-content-center" onSubmit={handleSubmit}>
            <input 
            value={value}
            onChange={handleChange}
            placeholder='Change subreddit'
            />
            <button className="mx-3">new subreddit</button>
        </form>
        <div className='column'>
            <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder='Search'
            />
        </div>
        {search == '' ? <Data subreddit={subreddit} /> : 
        <SearchComponent searchResults={searchResults}/>}
        </div>
    )
}