import { useSelector } from "react-redux"
import { selectSubredditList, } from "./subredditListSlice"
import DeleteIcon from "./DeleteIcon"
import SubredditLink from './SubredditLink'

export default function SubredditList(props) {

    const subredditList = useSelector(selectSubredditList)

    return (
        <div className="mt-6 is-flex is-flex-direction-column is-size-3 has-text-centered">
            {subredditList.map(item => (
                <div key={item} className="is-flex is-align-items-center">
                <SubredditLink key={item} item={item} />
                    <DeleteIcon item={item} />
                </div>
            ))}
        </div>
    )
}