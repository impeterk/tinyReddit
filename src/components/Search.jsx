import {useState, useEffect} from 'react'
import Loading from '../Helpers/Loading'
import PostComponent from "./PostComponent"
import {Api} from "../api/Api"

export default function Search(props) {
    const [searchResults, setSearchResults] = useState(null)

    // fetches search data from api 
      async function showSearchResults() {
        let response = await fetch(`${Api}/search.json?q=${props.search}`)
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
                 <PostComponent key={post.data.id} id={post.data.id} permalink={post.data.permalink}title={post.data.title} post_hint={post.data.post_hint} is_video={post.data.is_video} media={post.data.media} data={post} url={post.data.url} score={post.data.score} author={post.data.author} subreddit={post.data.subreddit} thumbnail={post.data.thumbnail}/>
            ))}
            </ol>
            }
        </div>
    )
}