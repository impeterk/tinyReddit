import Data from '../Data'
import {useParams} from 'react-router-dom'

export default function Subreddit(props) {
const {subreddit} = useParams()

  return (
    <Data subreddit={subreddit} listing={"new"} />
  )
}
