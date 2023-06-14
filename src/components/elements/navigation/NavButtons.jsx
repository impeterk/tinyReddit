import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function NavButtons() {

    const navigate = useNavigate()

    const goBack = () => {
        console.log(navigate)
        navigate(-1)
    }
    const goForward = () => {
        console.log(navigate)
        navigate(1)

    }
    return (
        <div className="is-flex is-justify-content-space-between container">
            <button onClick={goBack} className="button is-info is-outlined has-background-info-light" >
               <FontAwesomeIcon icon={faLeftLong} size="3x"/> 
            </button>
        </div>
    )
}