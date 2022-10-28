import { useEffect } from 'react'
import {useState} from 'react'
import Data from './Data'

export default function Search(props) {
    const [subreddit, setSubreddit] = useState('popular')
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const [subredditOnly, setSubredditOnly] = useState(false)
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        async function showSearchResults() {
            let response = await fetch(`/api${subredditOnly ? `/r/${subreddit}/` : `/`}search.json?q=${search}`)
            let responseJSON = await response.json()
            setSearchResults(responseJSON)
        }
        showSearchResults()
    },[search, subredditOnly])


    const handleSubmit = event => {
        event.preventDefault()
        setSubreddit(value)
        setValue('')
        setSearchResults(null)
        setSubredditOnly(false)
        setSearch('')
        document.getElementById('subredditSearch').checked = false
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
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder='Search'
        />
        <input 
        type="checkbox"
        id="subredditSearch"
        defaultChecked={false}
        onClick={() => setSubredditOnly(checked => !checked)}
        />
        <label htmlFor="subredditSearch">subreddit Search</label>
        {search == '' ? <Data subreddit={subreddit} />: (
        searchResults ? 
        <ol>
        {searchResults.data.children.map(post => (
          <li key={post.data.id}><p>{post.data.subreddit}</p><br/><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
        ))}
      </ol>
      : <p>No results</p>
      )}
        </div>
    )
}