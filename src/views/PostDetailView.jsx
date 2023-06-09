import { useParams, useNavigate } from "react-router-dom"
import { getSubreddit } from "../api"

export default function PostDetailView() {
    const {subreddit, id } = useParams()
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    getSubreddit(subreddit, id)
    return (
        <div className="container">
            <p>{id}</p>
            <p>{subreddit}</p>
            <button className="button is-link" onClick={goBack}>go Back</button>
        </div>
    )
}