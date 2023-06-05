import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import db from '@/db.json'

export default function SearchView() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')
    const subredditList = db.subredditList

    const onLinkClick = () => {
        if (!subredditList.includes(searchQuery) && searchQuery) {
            subredditList.unshift(searchQuery)
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