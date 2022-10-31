import {useState, useEffect} from 'react'
import Loading from './Loading'

export default function SearchComponent(props) {
    const [searchResults, setSearchResults] = useState(null)

    async function showSearchResults() {
        let response = await fetch(`/api/search.json?q=${props.search}`)
        let responseJSON = await response.json()
        setSearchResults(responseJSON)
    }
    useEffect(() => {
        showSearchResults()
    },[props.search])




    return(
        <div>
            {(searchResults && searchResults.data.children.length == 0) || !searchResults ? 
                <div>
                <Loading /> 
                </div> :
            <ol>
            {searchResults.data.children.map(post => (
              <li key={post.data.id}><p>{post.data.subreddit}</p><br/><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
            ))}
            </ol>
            }
        </div>
    )
}