import { useParams, useNavigate } from "react-router-dom"
import { getSubreddit } from "../api"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPost, selectIsLoading, selectComments, selectPostData } from "../components/elements/postList/postListSlice"

export default function PostDetailView() {
    const { subreddit, id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)

    const postData = useSelector(selectPostData)
    const comments = useSelector(selectComments)

    useEffect(() => {
        dispatch(loadPost({ subreddit, id }))
    }, [id])

    function goBack() {
        navigate(-1)
    }

    if (isLoading) {
        return (
            <h1 className="title">Loading...</h1>
        )
    }


    console.log({ postData, comments })
    return (
        <div className="container mt-4 ">
            {/* <div className="is-flex my-4">
                <button className="button is-link" onClick={goBack}>go Back</button>
            </div> */}
            <div className="card p-2 ">
                <div className="card-content">
                    <h1 className="title has-text-centered is-3">{postData.title}</h1>
                    <p className="subtitle has-text-right">{postData.title}</p>
                </div>
                {postData.post_hint == "image" ?
                    < div className="card-image">
                        <figure className="image">
                            <img src={postData.url} alt={postData.title} />
                        </figure>
                    </div> : <div className="card-content">
                        <div className="content">
                            {postData.selftext}
                        </div>
                    </div> 
                }
                <div className="card-content">
                    <p className="subtitle">Comments</p>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.data.id}><p className="content">{comment.data.body}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}