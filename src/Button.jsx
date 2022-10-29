
export default function Button(props) {
    const handleListing = event => {
        props.setListing(event.target.value)
    } 


    return(
        <button value={props.value} onClick={handleListing} className={`mx-1 button is-medium is-clickable ${props.value == props.listing ? `is-primary` : `is-dark`}`} >{props.value}</button>
    )
}