import { useState, useEffect } from 'react'
import Search from './Search'
import 'bulma/css/bulma.css'
import Loading from './Loading'
import Button from './Button'
import DataComponent from './DataComponent'

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
      {!data || loading ? <><p className='is-size-2 has-text-danger'>{errorMessage}</p><Loading /></> :
      <div>
        <ol className='my-3'>
          {data.map(post => (
          <DataComponent key={post.data.id}data={post}/>
          ))}
        </ol>
      {reorderData ? <Loading /> : <button className="button is-dark" onClick={handleNumberOfPosts}>Load more</button>}
      </div>
      }
    </>
  )
}
