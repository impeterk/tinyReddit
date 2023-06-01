import { NavLink } from "react-router-dom"
import db from '@/db.json'
export default function SubredditList(props) {
    const subredditList = db.subredditList
    return (
        <div className="mt-6 is-flex is-flex-direction-column is-size-3 has-text-centered">
                {subredditList.map(item => (
                    <NavLink key={item} to={`/r/${item}`} className={({isActive}) => `navbar-item is-block mx-4 my-2 ${isActive ? 'is-active has-background-light has-text-info' : 'has-text-light'}`}>/r/{item}</NavLink>

                ))}
        </div>
    )
}