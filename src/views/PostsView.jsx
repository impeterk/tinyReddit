import { useEffect } from 'react'
import Post from '@/components/elements/postList/Post.jsx'
import { useParams } from 'react-router-dom';
import { selectIsLoading, selectPostsInSubreddit, loadSubreddit } from '../components/elements/navigation/subredditList/subredditListSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PostsView() {
    const { subreddit } = useParams()
    const dispatch = useDispatch()
    const loadingSubreddit = useSelector(selectIsLoading)
    useEffect(() => {
        dispatch(loadSubreddit(subreddit))
    }, [subreddit])

    if (loadingSubreddit) {
        return (
            <p className="is-size-1">Loading...</p>
        )
    }
    return (
        // <>
        //     <ul>
        //         {postsArray.map(post => (
        //             <li key={post.id}><Post post={post} /></li>
        //         ))}
        //     </ul>
        // </>
        
            <p className="is-size-1">Loaded</p>

    )
}