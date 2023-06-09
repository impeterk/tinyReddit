import { Link, useParams } from "react-router-dom"
export default function Post(props) {
    const { title, author, content, id } = props.post.data
    const {subreddit} = useParams()
    return (
        <article className="section py-5 px-2">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{author}</p>
                        </div>
                    </div>

                    <div className="content">{content}</div>
                </div>
                <div className="card-content field is-grouped is-grouped-right">
                    <Link to={`/r/${subreddit}/${id}`} className="button is-success ">continue</Link>
                </div>
            </div>
        </article>
    )
}