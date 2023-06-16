import { useParams, useNavigate } from "react-router-dom"
import { getSubreddit } from "../api"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPost, selectIsLoading, selectComments, selectPostData } from "../components/elements/postList/postListSlice"
import Comment from "@/components/elements/postList/Comment"

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
            <div className={`pageloader is-active is-light`}><span className="title">Loading...</span></div>
        )
    }


    return (
        <div className="mt-4 ">
            {/* <div className="is-flex my-4">
                <button className="button is-link" onClick={goBack}>go Back</button>
            </div> */}
            <div className="card p-2 container">
                <div className="card-content">
                    <h1 className="title is-3">{postData.title}</h1>
                    <p className="subtitle has-text-right">by: {postData.author}</p>
                </div>
                {postData.post_hint == "image" ?
                    < div className="card-image">
                        <figure className="image">
                            <img src={postData.url} alt={postData.title} />
                        </figure>
                    </div> : ""}
                     <div className="card-content">
                        <div className="content">
                            {postData.selftext}
                        </div>
                    </div>
                
                <div className="card-content">
                    <p className="subtitle is-3">Comments</p>
                    <div className="media">
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