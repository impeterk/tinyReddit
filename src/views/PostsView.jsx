import { useEffect } from 'react'
import Post from '@/components/elements/postList/Post.jsx'
import { useParams } from 'react-router-dom';
import { selectIsLoading, selectPostsInSubreddit, loadSubreddit } from '../components/elements/navigation/subredditList/subredditSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PostsView() {
    const { subreddit } = useParams()
    const dispatch = useDispatch()
    const postsArray = useSelector(selectPostsInSubreddit)
    useEffect(() => {
        dispatch(loadSubreddit(subreddit))
    }, [subreddit])

    console.log(postsArray)
    return (
        <>
            <ul>
                {postsArray.map(post => (
                    <li key={post.data.id}><Post post={post} /></li>
                ))}
            </ul>
        </>
    )
}