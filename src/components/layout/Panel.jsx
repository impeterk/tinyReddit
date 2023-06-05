import { useState } from "react"
import Footer from "@/components/navigation/Footer"
import SubredditList from "@/components/navigation/subredditList/SubredditList"
export default function Panel() {

  const [search, setSearch] = useState()

  const handleInput = (event) => {

    setSearch(prev => prev = event.target.value)
  }

  return (
    <div className="container is-family-monospace">
     <article className="panel is-sticky has-background-info is-flex is-flex-direction-column min-h-full is-fullheight is-info">
  <p className="panel-heading">
    Info
  </p>
  
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-info" type="text" placeholder="Search" onChange={handleInput}/>
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
    
  </div>
  <SubredditList />
  <div className="mt-auto">
<Footer />
  </div>
  </article> 
    </div>
  )
}