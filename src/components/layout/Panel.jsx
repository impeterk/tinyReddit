import Footer from "@/components/navigation/Footer"
import SubredditList from "@/components/navigation/subredditList/SubredditList"
export default function Panel() {


  return (
    <div className="container is-family-monospace">
     <article className="panel is-sticky has-background-info is-flex is-flex-direction-column min-h-full is-fullheight is-info">
  <p className="panel-heading">
 {`<React 2 Reddit />`} 
  </p>
  
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-info" type="text" placeholder="Search" />
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