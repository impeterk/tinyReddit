import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
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
        <div onClick={handleIconClick} className={`ml-auto ${hovered ? 'has-text-danger' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FontAwesomeIcon icon={faCircleXmark} size='sm' beat={hovered} />
        </div>
    )
}