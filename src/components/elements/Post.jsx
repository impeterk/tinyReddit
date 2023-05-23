import { Link } from "react-router-dom"
export default function Post(props) {
    const { title, author, content, id } = props.post

    return (
        <div className="container mx-auto mb-6">
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
                    <Link to={`/${id}`} className="button is-success ">continue</Link>
                </div>
            </div>
        </div>
    )
}