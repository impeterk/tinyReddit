import { useParams, useNavigate } from "react-router-dom"

export default function PostDetail() {
    const {subreddit, id } = useParams()
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    return (
        <div className="container">
            <p>{id}</p>
            <p>{subreddit}</p>
            <button className="button is-link" onClick={goBack}>go Back</button>
        </div>
    )
}