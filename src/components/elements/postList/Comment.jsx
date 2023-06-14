import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
export default function Comment(props) {
    const { author, body, ups } = props.commentData

    return (
        <article className="media my-2 is-flex-direction-column">
            <div className="is-flex is-align-items-center mb-2">
            <strong className="">
                {author}
            </strong>
                <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" className="mx-2 has-text-info" />
               <p className="">{ups}</p> 
            </div>
            <p className="has-text-justified">
                {body}
            </p>
        </article>
    )
}