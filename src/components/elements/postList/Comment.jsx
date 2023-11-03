import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import parse from 'html-react-parser';


export default function Comment(props) {
    const { author, body_html, ups } = props.commentData

    if (!body_html) {
        return (
            <p>Loading comments...</p>
        )
    }

    return (
        <article className="media my-2 is-flex-direction-column">
            <div className="is-flex is-align-items-center mb-2">
                <strong className="">
                    {author}
                </strong>
                <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" className="mx-2 has-text-info" />
                <p className="">{ups}</p>
            </div>
            <div className="content is-flex is-flex-direction-column" dangerouslySetInnerHTML={{ __html: parse(body_html || '') }} />
        </article >
    )
}