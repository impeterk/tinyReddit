import { useState, useEffect } from 'react'
import Search from './Search'
import 'bulma/css/bulma.css'
import Loading from './Loading'
import Button from './Button'
import PostComponent from './PostComponent'
import SubredditList from './SubredditList'


export default function Data(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [listing, setListing] = useState('hot')
  const [reorderData, setReorderData] = useState(false)
  const errorMessage = "Try different subreddit!"

  let best = 'best'
  let hot = 'hot'
  let newest = 'new'

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
      await fetchData(props.subreddit, listing, numberOfPosts, true)
    }
    newSubreddit()
  }, [props.subreddit])

  useEffect(() => {
    async function loadMoreOrReorder() {
      setReorderData(true)
      await fetchData(props.subreddit, listing, numberOfPosts, false)
      setReorderData(false)
    }
    loadMoreOrReorder()
  }, [numberOfPosts, listing])

  const handleNumberOfPosts = () => {
    setNumberOfPosts((numberOfPosts) => numberOfPosts + 5)
  }


  return (
    <>
      <div className='is-flex is-flex-direction-row is-justify-content-center'>
      <Button value='new' setListing={setListing} listing={listing} />
      <Button value='hot' setListing={setListing} listing={listing} />
      <Button value='best' setListing={setListing} listing={listing} />
      </div>
      {!data || loading ? <><p className='is-size-2 has-text-danger'>{}</p><Loading /></> :
      <div className='columns is-multiline'>
          <div className='column is-three-quarters my-3'>
            <ul>
              {data.map(post => (
              <PostComponent key={post.data.id} title={post.data.title} post_hint={post.data.post_hint} is_video={post.data.is_video} media={post.data.media} data={post} url={post.data.url} score={post.data.score} author={post.data.author} subreddit={post.data.subreddit}/>
              ))}
            </ul>
            <div className='column is-full'>
              {reorderData ? <Loading /> : <button className="button is-large is-fullwidth is-link has-text-weight-bold" onClick={handleNumberOfPosts}>Load more</button>}
            </div>
          </div>
        <div className='column my-3 is-one-quarter'>
          <SubredditList />
        </div> 
      </div>
      }
    </>
  )
}
