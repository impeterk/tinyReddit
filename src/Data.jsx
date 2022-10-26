import { useState, useEffect } from 'react'
import Search from './Search'
import 'bulma/css/bulma.css'
export default function Data(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [numberOfPosts, setNumberOfPosts] = useState(10)
    const [listing, setListing] = useState('hot')
    
    let best = 'best'
    let hot = 'hot'
    let newest = 'new'

    useEffect(() => {
    async function fetchData() {
      setLoading(true)
      let response = await fetch(`/api/r/${props.subreddit}/${listing}.json?limit=${numberOfPosts}`, {mode:'cors'}, {headers: {'Access-Control-Allow-Origin': '*'}})
      let responseJSON = await response.json()
      responseJSON = await responseJSON.data.children
        setData(responseJSON)
      setLoading(false)
    }
    fetchData()
  }, [props.subreddit, numberOfPosts, listing])

  const handleClick = () => {
    setNumberOfPosts((numberOfPosts) => numberOfPosts + 5)
  }

    const handleListing = event => {
        setListing(event.target.id)
    }
    
    const color = id => {
      let tmp = 'button'
      if (listing == id) {
        tmp = 'button is-primary'
      }
      return tmp
   }



    return (
        <div>
            <button id={best} className={color(best)} onClick={handleListing}>best</button>
            <button id={newest} className={color(newest)} onClick={handleListing}>new</button>
            <button id={hot} className={color(hot)} onClick={handleListing}>hot</button>
        {!data || loading ? <p>Loading...</p> :
        <ul>
        {data.map(post => (
          <li key={post.data.id}><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
          ))}
      </ul>
        }
      <button onClick={handleClick}>{numberOfPosts}</button>
      </div>
    )
}
