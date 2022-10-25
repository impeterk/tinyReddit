import { useState, useEffect } from 'react'
import Search from './Search'

export default function Data(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [numberOfPosts, setNumberOfPosts] = useState(10)
    const [listing, setListing] = useState('hot')

    useEffect(() => {
    async function fetchData() {
      setLoading(true)
      let response = await fetch(`/api/r/${props.subreddit}/${listing}.json?limit=${numberOfPosts}`, {mode:'cors'}, {headers: {'Access-Control-Allow-Origin': '*'}})
      let responseJSON = await response.json()
      responseJSON = responseJSON.data.children
        setData(responseJSON)
        console.log(data)
      setLoading(false)
    }
    fetchData()
  }, [props.subreddit, numberOfPosts, listing])

  const handleClick = () => {
    setNumberOfPosts((numberOfPosts) => numberOfPosts + 5)
  }

  if (!data || loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (data) {
    return (
        <div>
            <button value='best' onClick={(e) => setListing(e.target.value)}>best</button>
            <button value='new' onClick={(e) => setListing(e.target.value)}>new</button>
            <button value='hot' onClick={(e) => setListing(e.target.value)}>hot</button>
        <ul>
        {data.map(post => (
          <li key={post.data.id}><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
        ))}
      </ul>
      <button onClick={handleClick}>{numberOfPosts}</button>
      </div>
    )
  }
}