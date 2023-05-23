import { useParams, useNavigate } from "react-router-dom"

export default function PostDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    return (
        <div className="container">
            <p>{id}</p>
            <button className="button is-link" onClick={goBack}>go Back</button>
        </div>
    )
}