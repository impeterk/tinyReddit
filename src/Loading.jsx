import './Loading.css'

export default function Loading(props) {

const colors = ["primary", "link", "info", "success", "warning", "danger"]

let getRandomIndexOfArray = array => {
    let randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}



    return(
        <div className="content">
            <progress className={`progress py-5 my-1 is-large is-medium is-${colors[getRandomIndexOfArray(colors)]}`}></progress>
            <h3 className={`is-size-3 overBar has-text-weight-bold has-text-centered is-child has-text-${colors[getRandomIndexOfArray(colors)]}`}>Loading...</h3>
        </div>
    )
}