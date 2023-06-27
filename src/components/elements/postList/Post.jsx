import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"
import  ReactMarkdown  from 'react-markdown';

export default function Post(props) {
    const { title, author, subreddit, selftext, id, post_hint, url } = props.post.data

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
                        <ReactMarkdown className="line-clamp-3">
                            {selftext}
                        </ReactMarkdown>

                </div>
                <div className="card-content container is-flex is-justify-content-end">
                    {props.children}
                    <Link to={`/r/${subreddit}/${id}`} className="ml-4 button is-medium is-info is-responsive">
                        <FontAwesomeIcon icon={faFileLines} size="xl" className="mr-2" /><span>Read Post</span>
                    </Link>
                </div>
            </div>
        </article>
    )
}