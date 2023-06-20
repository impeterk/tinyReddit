import { useParams, useNavigate } from "react-router-dom"
import { getSubreddit } from "../api"
import { useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPost, selectIsLoading, selectComments, selectPostData } from "../components/elements/postList/postListSlice"
import Comment from "/src/components/elements/postList/Comment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function PostDetailView() {
    const { subreddit, id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)

    const postData = useSelector(selectPostData)
    const comments = useSelector(selectComments)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        dispatch(loadPost({ subreddit, id }))
    }, [id])

    function goBack() {
        navigate(-1)
    }
    const toggleModal = () => {
        setModal(() => {
        return !modal
        })
    }

    if (isLoading) {
        return (
            <div className={`pageloader is-active is-light`}><span className="title">Loading...</span></div>
        )
    }
    
    return (
        <div className="mt-4 ">
            <div className="card p-2 container">
                <div className="card-content">
                    <div className="is-flex mb-4">
                        <button className="button is-info is-outlined" onClick={goBack}>
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" className="mr-2 " />
                            Back</button>
                    </div>
                    <h1 className="title is-3">{postData.title}</h1>
                    <p className="subtitle has-text-right">by: {postData.author}</p>
                </div>
                {postData.post_hint == "image" ?
                    < div className="card-image">
                        <figure className="image">
                            <img src={postData.url} onClick={toggleModal} alt={postData.title} />
                        </figure>
                        <div className={`modal ${modal ? 'is-active' : ''}`}>
                            <div onClick={toggleModal} className="modal-background"></div>
                            <div className="modal-content">
                                <p className="image">
                                    <img src={postData.url} alt="media image" />
                                </p>
                            </div>
                            <button onClick={toggleModal} className="modal-close is-large" aria-label="close"></button>
                        </div>
                    </div>
                    : ""}
                {postData.media ?
                    <div className="card-image">
                        <video className="image is-clickable" controls>
                            <source src={postData.media.reddit_video.fallback_url} type="video/mp4" />
                        </video>
                    </div>
                    : ""}
                <div className="card-content">
                    <div className="content">
                        {postData.selftext}
                    </div>
                </div>

                <div className="container card-content">
                    <p className="subtitle is-3">Comments</p>
                    <div className="container media">
                        <ul>
                            {comments.map(comment => (
                                <li key={comment.data.id}><Comment commentData={comment.data} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}