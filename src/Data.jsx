import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import Loading from './Loading'
import PostComponent from './PostComponent'


export default function Data(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [reorderData, setReorderData] = useState(false)
  const errorMessage = "Try different subreddit!"

  // fetches data from reddit JSON API
  async function fetchData(subreddit, listing, numberOfPosts, loading) {
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
  useEffect(() => {
    async function newSubreddit() {
      await fetchData(props.subreddit, props.listing, numberOfPosts, true)
    }
    newSubreddit()
  }, [props.subreddit])

  useEffect(() => {
    async function loadMoreOrReorder() {
      setReorderData(true)
      await fetchData(props.subreddit, props.listing, numberOfPosts, false)
      setReorderData(false)
    }
    loadMoreOrReorder()
  }, [numberOfPosts, props.listing])

  const handleNumberOfPosts = () => {
    setNumberOfPosts((numberOfPosts) => numberOfPosts + 5)
  }


  return (
    <>
      {!data || loading ? <Loading /> :
      <div>
          <div>
            <ul>
              {data.map(post => (
              <PostComponent key={post.data.id} title={post.data.title} post_hint={post.data.post_hint} is_video={post.data.is_video} media={post.data.media} data={post} url={post.data.url} score={post.data.score} author={post.data.author} subreddit={post.data.subreddit}/>
              ))}
            </ul>
            <div>
              {reorderData ? <Loading /> : <button className="button is-large is-fullwidth is-link has-text-weight-bold" onClick={handleNumberOfPosts}>Load more</button>}
            </div>
          </div>
      </div>
      }
    </>
  )
}
