import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { removeSubreddit } from './subredditListSlice'
import { useState } from "react"
export default function DeleteIcon(props) {
    const [hovered, setHovered] = useState(false)
    const {item} = props
    const dispatch = useDispatch()

    const handleMouseEnter = () => {
        setHovered(() => {
            return true
        })
    }
    const handleMouseLeave = () => {
        setHovered(() => {
            return false
        })
    }

    const handleIconClick = () => {
        dispatch(removeSubreddit(item))

    }

    return (
        <div onClick={handleIconClick} className={`h-100 p-2 is-bordered is-icon is-rounded mr-auto is-clickable ${hovered ? 'has-background-danger has-text-light' : 'has-background-grey-lighter has-text-info'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FontAwesomeIcon icon={faXmark} beat={hovered} />
        </div>
    )
}