import {useState} from 'react'
import Data from './Data'

export default function Search(props) {
    const [subreddit, setSubreddit] = useState('popular')
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setSubreddit(value)
        setValue('')
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleSearch = event => {
        setSearch(event.target.value)
    }

    return(
        <div>
            <h1>{subreddit.toLocaleUpperCase()}</h1>
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            onChange={handleChange}
            placeholder='Change subreddit'
            />
            <button>new subreddit</button>
        </form>
        <input
        value={search}
        onChange={handleSearch}
        placeholder='Search'
        />
        <Data subreddit={subreddit} search={search}/>
        </div>
    )
}