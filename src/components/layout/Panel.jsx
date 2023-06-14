import Footer from "@/components/elements/navigation/Footer"
import SubredditList from "@/components/elements/navigation/subredditList/SubredditList"
import NavButtons from "../elements/navigation/NavButtons"
export default function Panel() {


  return (
    <div className="container is-family-monospace">
      <article className="panel is-sticky has-background-info is-flex is-flex-direction-column min-h-full is-fullheight is-info">
        <div className="panel-block">
          <p className="panel-heading is-size-4-desktop">
            {`<React2Reddit />`}
          </p>
        </div>
        {/* <div className="panel-block">
          <NavButtons />
        </div> */}

          <SubredditList />
        <div className="mt-auto">
          <Footer />
        </div>
      </article>
    </div>
  )
}