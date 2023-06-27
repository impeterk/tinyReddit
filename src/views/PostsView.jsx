import { useEffect, useState } from 'react'
import Post from '/src/components/elements/postList/Post.jsx'
import { Navigate, useParams } from 'react-router-dom';
import { selectPostsInSubreddit, loadSubreddit, loadMorePosts, selectIsLoading, selectLoadingMore, selectFailedToLoad } from '/src//components/elements/navigation/subredditList/subredditSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function PostsView() {
    const { subreddit } = useParams()
    const dispatch = useDispatch()
    const postsArray = useSelector(selectPostsInSubreddit)
    const isLoadingMore = useSelector(selectLoadingMore)
    const loadingSubreddit = useSelector(selectIsLoading)
    const failedToLoad = useSelector(selectFailedToLoad)

    const subredditTitle = subreddit.charAt(0).toUpperCase() + subreddit.slice(1)
    const [limit, setLimit] = useState(25)

    useEffect(() => {
        dispatch(loadSubreddit(subreddit))
        if (limit != 25) {
        setLimit((value) => {
            return value = 25
        })
        }
    }, [subreddit])

    useEffect(() => {
        dispatch(loadMorePosts({ subreddit, limit }))
    }, [limit])

    const handleLoadMoreClick = () => {
        setLimit(prev => {
            return prev + 5
        })
    }
    if (loadingSubreddit) {
        return (

            <div className={`pageloader ${loadingSubreddit ? 'is-active' : 'display-none'} is-light`}>
                <span className="title">
                    Loading...
                </span>
            </div>
        )
    }
    if (failedToLoad) {
    return (
        <Navigate to="/404" />
    )
    }
    
    
    return (
        <>
            <section className="hero is-medium is-desktop is-rounded is-info">
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
            <div className="container block">
                <button className={`button is-info is-fullwidth is-medium ${isLoadingMore ? 'is-loading' : ''}`} onClick={handleLoadMoreClick}>
                    <FontAwesomeIcon icon={faChevronDown} size="xl" />
                    <p className="is-size-4 has-text-weight-semibold mx-4">Load 5 More</p>
                    <FontAwesomeIcon icon={faChevronDown} size="xl" />
                </button>
            </div>
        </>
    )
}