import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"
export default function Post(props) {
    const { title, author, selftext, id, post_hint, url } = props.post.data
    const { subreddit } = useParams()
    console.log(props.post.data)
    return (
        <article className="section py-5 px-0">
            <div className="card">
                <div className="card-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle ">@{author}</p>
                    <div className="media">
                        <div className="media-content">
                            {post_hint == "image" ? (
                                <figure className="image">
                                    <img src={url} alt={url} />
                                </figure>) : ""
                            }
                        </div>
                    </div>

                </div>
                <div className="card-content is-size-5">
                    <p className="line-clamp-3">
                        {selftext}
                    </p>

                </div>
                <div className="card-content field is-grouped is-grouped-right">
                    {props.children}
                    <Link to={`/r/${subreddit}/${id}`} className="button is-info is-medium">
                        <FontAwesomeIcon icon={faFileLines} size="xl" className="mr-2"/><span>Read More</span>
                        </Link>
                </div>
            </div>
        </article>
    )
}