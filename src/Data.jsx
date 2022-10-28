import { useState, useEffect } from 'react'
import Search from './Search'
import 'bulma/css/bulma.css'

export default function Data(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [listing, setListing] = useState('hot')
  const [reorderData, setReorderData] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  let best = 'best'
  let hot = 'hot'
  let newest = 'new'

  async function fetchData(subreddit, listing, numberOfPosts, loading) {
    setLoading(loading)
    let response
    try {
      response = await fetch(`/api/r/${subreddit}/${listing}.json?limit=${numberOfPosts}`, { mode: 'cors' }, { headers: { 'Access-Control-Allow-Origin': '*' } })
    } catch(err) {
      setErrorMessage('Try different subreddit')
    }
    let responseJSON = await response.json()
    responseJSON = await responseJSON.data.children
    setData(responseJSON)
    setErrorMessage('')
    if (loading === true) {
      setLoading(!loading)
    }
  }

  useEffect(() => {
    setNumberOfPosts(10)
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

  const handleListing = event => {
    setListing(event.target.value)
  }

  const color = value => {
    let tmp = 'button is-dark'
    if (listing == value) {
      tmp = 'button is-primary'
    }
    return tmp
  }

  return (
    <>
      <div className='is-flex is-flex-direction-row is-justify-content-center'>
      <button value={newest} className={color(newest)} onClick={handleListing}>new</button>
      <button value={hot} className={color(hot)} onClick={handleListing}>hot</button>
      <button value={best} className={color(best)} onClick={handleListing}>best</button>
      </div>
      {!data || loading ? <><h2>Loading...</h2><p>{errorMessage}</p></> :
      <div>
        <ol className='my-3'>
          {data.map(post => (
            <li key={post.data.id}><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
          ))}
        </ol>
      {reorderData ? <p>Loading...</p> : <button className="button is-dark" onClick={handleNumberOfPosts}>Load more</button>}
      </div>
      }
    </>
  )
}
