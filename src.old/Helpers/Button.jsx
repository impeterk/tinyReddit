
export default function Button(props) {
    const handleListing = event => {
        props.setListing(event.target.value)
    } 


    return(
        <button value={props.value} onClick={props.setListing} className={`button is-clickable is-uppercase ${props.value == props.listing ? `has-text-weight-semibold is-info ` : `is-info is-outlined`}`} >{props.value}</button>
    )
}