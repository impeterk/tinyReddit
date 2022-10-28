import Loading from './Loading'

export default function SearchComponent(props) {

    if ((props.searchResults && props.searchResults.data.children.length == 0) || !props.searchResults) {
        return (
            <div>
                <Loading />
            </div>
        )
    }


    return(
        <div>
            <ol>
            {props.searchResults.data.children.map(post => (
              <li key={post.data.id}><p>{post.data.subreddit}</p><br/><a href={`https://reddit.com${post.data.permalink}`} target="_blank">{post.data.title}</a></li>
            ))}
            </ol>
        </div>
    )
}