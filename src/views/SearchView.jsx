import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { addSubreddit } from '@/components/elements/navigation/subredditList/subredditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loadSearchResults, selectLoadingSearch, selectSearchResults } from '../components/elements/Search/searchSlice'
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
                <div className="hero is-info">
                    <div className="hero-body">
                        <div className="title">
                            {searchQuery}
                        </div>
                    </div>
                </div>
            </Link>
            {isLoading ? (<h1 className="title">Loading...</h1>) : <h1 className='title'>Loaded</h1> }
        </>
    )
}