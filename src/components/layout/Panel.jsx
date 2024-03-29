import Footer from "/src/components/elements/navigation/Footer"
import SubredditList from "/src/components/elements/navigation/subredditList/SubredditList"
export default function Panel() {


  return (
    <div className="container is-family-monospace">
      <article className="panel is-sticky has-background-info is-flex is-flex-direction-column min-h-full is-fullheight is-info">
        <div className="panel-block">
          <p className="panel-heading is-size-4-desktop">
            {`<React2Reddit />`}
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