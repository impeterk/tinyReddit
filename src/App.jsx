import Navbar from './components/NavBar'
import Data from './Data'
import SubredditList from './SubredditList'
import Search from './components/Search'
import {useState} from 'react'
import 'bulma/css/bulma.css'

function App() {
  const [subreddit, setSubreddit] = useState('popular')
  const [search, setSearch] = useState('')
  const [listing, setListing] = useState('hot')

  return (
    <div className="App">
    <Navbar subreddit={subreddit} setSubreddit={setSubreddit} setSearch={setSearch} listing={listing} setListing={setListing} search={search}/>
    <div className='columns mx-1 py-1'>
      <div className='column is-three-quarters  my-1 px-1'>
        {search.length !== 0 ? 
        <Search search={search} /> :
        <Data subreddit={subreddit} listing={listing} /> 
        }
      </div>
      <div className="column is-one-quarter px-1 my-1">
        <SubredditList subreddit={subreddit} setSubreddit={setSubreddit} setSearch={setSearch}/>
      </div>
    </div>
    </div>
  )
}

export default App
