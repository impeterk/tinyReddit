import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { addSubreddit } from '@/components/navigation/subredditList/subredditListSlice'
import { useDispatch } from 'react-redux'
export default function SearchView() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')
    const dispatch = useDispatch()

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
        <section className="section py-5 px-2">
            <Link onClick={onLinkClick} className="is-info has-background-light is-size-5">{searchQuery ? `/r/${searchQuery}` : 'Home'}</Link>
        </section>
    )
}