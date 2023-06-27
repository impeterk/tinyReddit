import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { addSubreddit } from '/src/components/elements/navigation/subredditList/subredditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loadSearchResults, selectLoadingSearch, selectSearchResults } from '../components/elements/Search/searchSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import Post from '/src/components/elements/postList/Post'
export default function SearchView() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoadingSearch)
    const searchResults = useSelector(selectSearchResults)

    useEffect(() => {
        dispatch(loadSearchResults(searchQuery))
    }, [searchQuery])

    const onLinkClick = () => {
        if (searchQuery) {
            dispatch(
                addSubreddit(searchQuery)
            )
        }
        navigate({
            pathname: `/r/${searchQuery}`
        })
        setSearchParams(prev => '')
    }


    return (
        <>
            <Link onClick={onLinkClick} >
                <div className="hero is-info is-rounded">
                    <div className="hero-body">
                        <div className="title has-text-right ">
                        <span className="subtitle mr-2">
                            continue to 
                        </span>
                              /r/{searchQuery}
                        <FontAwesomeIcon icon={faDoorOpen} size="lg" className='ml-5'/>
                        </div>
                    </div>
                </div>
            </Link>
            {isLoading ? (
                    <div className='pageloader is-active is-light'></div>
            ) : 
            <ul>
                {searchResults.map(post => (
                    <li key={post.data.id}>
                        <Post post={post} >
                    <Link to={`/r/${post.data.subreddit}`} className="button is-medium is-info is-outlined is-responsive">
                        <span>to Subreddit</span>
                        <FontAwesomeIcon icon={faArrowRight} size="xl" className="ml-2"/>
                        </Link>
                        </Post>
                    </li>
                ))}
            </ul> }
        </>
    )
}