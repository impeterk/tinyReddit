import { useEffect } from 'react'
import Post from '@/components/elements/postList/Post.jsx'
import { useParams } from 'react-router-dom';
import { selectIsLoading, selectPostsInSubreddit, loadSubreddit } from '../components/elements/navigation/subredditList/subredditSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PostsView() {
    const { subreddit } = useParams()
    const dispatch = useDispatch()
    const postsArray = useSelector(selectPostsInSubreddit)
    const subredditTitle = subreddit.charAt(0).toUpperCase() + subreddit.slice(1)
    useEffect(() => {
        dispatch(loadSubreddit(subreddit))
    }, [subreddit])

    return (
        <>
            <section className="hero mt-4 is-medium is-desktop is-rounded is-info">
                <div className="hero-body has-text-centered">
                    <p className="title is-size-1">
                        <span className="title">/r/</span>
                        {subredditTitle}
                    </p>
                </div>
            </section>
            <ul>
                {postsArray.map(post => (
                    <li key={post.data.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </>
    )
}