import { useSelector } from "react-redux"
import { selectSubredditList, } from "./subredditSlice"
import DeleteIcon from "./DeleteIcon"
import SubredditLink from './SubredditLink'

export default function SubredditList(props) {

    const subredditList = useSelector(selectSubredditList)

    return (
        <div className="mt-6 is-flex is-flex-direction-column is-size-4-desktop is-size-5-mobile has-text-centered">
            {subredditList.map(item => (
                <div key={item} className="is-flex is-align-items-center animate__animated animate__fadeIn">
                <SubredditLink key={item} item={item} />
                    <DeleteIcon item={item} />
                </div>
            ))}
        </div>
    )
}