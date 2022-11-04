import Navbar from './components/NavBar'
import Data from './Data'
import SubredditList from './components/SubredditList'
import Search from './components/Search'
import { useState } from 'react'
import Footer from './components/Footer'
import Cookies from './components/Cookies'

function App() {

  // global states. Not the best solution, but better then before
  const [subreddit, setSubreddit] = useState('popular')
  const [search, setSearch] = useState('')
  const [listing, setListing] = useState('hot')

  return (
    <div className="App">
      <Navbar subreddit={subreddit} setSubreddit={setSubreddit} setSearch={setSearch} listing={listing} setListing={setListing} search={search} />
      <div className='columns mx-1 py-1 is-desktop'>
        <div className='column is-8 is-offset-1 my-1 px-1'>
          {search.length !== 0 ?
            <Search search={search} /> :
            <Data subreddit={subreddit} listing={listing} />
          }
        </div>
        <div className="column is-one-quarter">
          <SubredditList subreddit={subreddit} setSubreddit={setSubreddit} setSearch={setSearch} />
          <Cookies />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
