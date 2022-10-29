import Data from "./Data";

export default function DataComponent(props) {
console.log(props.data)
    return(
        <div className="card is-desktop my-1">
            <header className="card-header">
            <p className="card-header-title">
            {props.data.data.title}
            </p>
            </header>
            {props.data.data.post_hint == "image"  || props.data.data.post_hint == "hosted:video" ? 
  <div className="card-image">
    {props.data.data.is_video ?
    <video className="image is-clickable" height={props.data.data.media.reddit_video.height} controls>
        <source src={props.data.data.media.reddit_video.fallback_url} />
    </video>
     : 
    <figure className="image is-16by9">
      <img src={props.data.data.url} alt="Placeholder image" />
    </figure> }
  </div> : null }
  <div className="card-content">
  <div class="media">
      <div class="media-left is-flex">
          <p className="is-size-2 mx-2">&#129153;</p>
          <p className="is-size-4 is-flex is-align-items-center">{props.data.data.score}</p>
      </div>
      <div className="media-content">
        <p className="title is-4">{props.data.data.author}</p>
        <p className="subtitle is-6">{props.data.data.subreddit}</p>
        </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
  </div>
</div>
    )
}