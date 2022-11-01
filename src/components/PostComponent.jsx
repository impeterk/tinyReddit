export default function DataComponent(props) {

    return(
      <div className="card">
         <header className="card-header is-flex is-align-items-center">
          <div className="media mb-0">
             <div className="media-left mx-2 is-flex">
              <p className="is-size-2 mx-2">&#11021;</p>
              <p className="is-size-4 is-flex is-align-items-center">{props.score}</p>
            </div>
          </div> 
           <p className="card-header-title is-size-4">
            {props.author}
           </p>
        </header>
        <div className="columns is-desktop">
            {props.post_hint == "image"  || props.post_hint == "hosted:video" ? 
            <>
          <div className="column is-two-thirds card-image">
                {props.is_video ?
              <video className="image is-clickable m-1" height={props.media.reddit_video.height} controls>
                <source src={props.media.reddit_video.fallback_url} />
              </video>
                : 
                  <figure className="image m-1 is-4by3">
                    <img src={props.url} alt="Placeholder image" />
                  </figure> }
          </div> 
                  <div className="card-content my-1 column mr-3">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-3">{props.title}</p>
                        <p className="subtitle is-6">r/{props.subreddit}</p>
                      </div>
                    </div>
                  </div>
                  </> : 
                  <div className="card-content column is-full">
                  <div className="media">
                    <div className="media-content">
                      <p className="title ml-4 is-3">{props.title}</p>
                      <p className="subtitle ml-6 is-6">r/{props.subreddit}</p>
                    </div>
                  </div>
                </div> }     
        </div> 
          <div className="content mx-3">
            <p>{props.selftext}</p>
          </div>
          <div className="is-flex is-justify-content-end mx-3">
            <a className="my-4 button is-info is-outlined" href={`https://reddit.com${props.permalink}`} target="_blank">
              Continue to Reddit &#10095;
            </a>
          </div>
      </div>
    )
}