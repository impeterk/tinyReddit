import {useState, useEffect} from 'react'
import Loading from '../Helpers/Loading'
import PostComponent from "./PostComponent"

export default function Search(props) {
    const [searchResults, setSearchResults] = useState(null)

    // fetches search data from api 
      async function showSearchResults() {
        let response = await fetch(`/api/search.json?q=${props.search}`)
        let responseJSON = await response.json()
        setSearchResults(responseJSON)
    }

    useEffect(() => {
        showSearchResults()
    },[props.search])

    if (props.search === '') {
        return
    }
    return(
        <div>
            {(searchResults && searchResults.data.children.length == 0) || !searchResults ? 
                <div>
                <Loading /> 
                </div> :
            <ol>
            {searchResults.data.children.map(post => (
                 <PostComponent key={post.data.id} title={post.data.title} post_hint={post.data.post_hint} is_video={post.data.is_video} media={post.data.media} data={post} url={post.data.url} score={post.data.score} author={post.data.author} subreddit={post.data.subreddit}/>
            //  <li key={post.data.id}><p>{post.data.subreddit}</p><br/><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
            ))}
            </ol>
            }
        </div>
    )
}