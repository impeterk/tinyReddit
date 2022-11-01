export default function DataComponent(props) {
// console.log(props.data)
    return(
        <div className="card my-1">
            <header className="card-header">
            <p className="card-header-title">
            {props.title}
            </p>
            </header>
            {props.post_hint == "image"  || props.post_hint == "hosted:video" ? 
  <div className="card-image">
    {props.is_video ?
    <video className="image is-clickable" height={props.media.reddit_video.height} controls>
        <source src={props.media.reddit_video.fallback_url} />
    </video>
     : 
    <figure className="image is-16by9">
      <img src={props.url} alt="Placeholder image" />
    </figure> }
  </div> : null }
  <div className="card-content">
  <div className="media">
      <div className="media-left is-flex">
          <p className="is-size-2 mx-2">&#129153;</p>
          <p className="is-size-4 is-flex is-align-items-center">{props.score}</p>
      </div>
      <div className="media-content">
        <p className="title is-4">{props.author}</p>
        <p className="subtitle is-6">{props.subreddit}</p>
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