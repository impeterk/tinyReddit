import { useState, useEffect } from 'react'
import Loading from './Helpers/Loading'
import PostComponent from './components/PostComponent'


export default function Data(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [reorderData, setReorderData] = useState(false)
  const errorMessage = "Try different subreddit!"


  // fetches subredditdata from reddit JSON API
  async function fetchSubredditData(subreddit, listing, numberOfPosts, loading) {
    setLoading(loading)
    let response
    try {
    response = await fetch(`/api/r/${subreddit}/${listing}.json?limit=${numberOfPosts}`, { mode: 'cors' }, { headers: { 'Access-Control-Allow-Origin': '*' } })
  } catch(err) {
    errorMessage
  }
    let responseJSON = await response.json()
      responseJSON = await responseJSON.data.children
      setData(responseJSON)
    if (loading === true) {
      setLoading(!loading)
    }
  }

  // add 5 to posts displayed
  const handleNumberOfPosts = () => {
    setNumberOfPosts((numberOfPosts) => numberOfPosts + 5)
  }


  //calls fetchsubreddit data function with loading set to true
  useEffect(() => {
    async function newSubreddit() {
      await fetchSubredditData(props.subreddit, props.listing, numberOfPosts, true)
    }
    newSubreddit()
  }, [props.subreddit])

  //calls fetchsubreddit data function with loading set to true
  useEffect(() => {
    async function loadMoreOrReorder() {
      setReorderData(true)
      await fetchSubredditData(props.subreddit, props.listing, numberOfPosts, false)
      setReorderData(false)
    }
    loadMoreOrReorder()
  }, [numberOfPosts, props.listing])


  return (
    <>
      {!data || loading ? <Loading /> :
      <div>
          <div>
            <ul>
              {data.map(post => (
              <li className="my-1" key={post.data.id} ><PostComponent id={post.data.id} title={post.data.title} selftext={post.data.selftext} post_hint={post.data.post_hint} is_video={post.data.is_video} media={post.data.media} data={post} url={post.data.url} score={post.data.score} author={post.data.author} subreddit={post.data.subreddit} thumbnail={post.data.thumbnail} permalink={post.data.permalink}/></li>
              ))}
            </ul>

            <div>
              {reorderData ? <Loading /> : <button className="button is-large is-fullwidth is-link has-text-weight-bold" onClick={handleNumberOfPosts}>	
&#129155; Load more 	
&#129155;</button>}
            </div>
          </div>
      </div>
      }
    </>
  )
}
