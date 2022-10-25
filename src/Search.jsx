import {useState} from 'react'
import Data from './Data'

export default function Search(props) {
    const [subreddit, setSubreddit] = useState('popular')
    const [value, setValue] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setSubreddit(value)
        setValue('')
    }
    const handleChange = event => {
        setValue(event.target.value)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            onChange={handleChange}
            placeholder='change subreddit'
            />
            <button>new subreddit</button>
        </form>
        <Data subreddit={subreddit} />
        </div>
    )
}