export default function Loading(props) {

const colors = ["primary", "link", "info", "success", "warning", "danger"]

let randomColor = colors[Math.floor(Math.random() * colors.length)]

    return(
        <div className="column is-half is-offset-one-quarter">
            <progress className={`progress is-medium is-${randomColor}`}></progress>
            <h3 className={`is-size-3 has-text-${randomColor}`}>Loading...</h3>
        </div>
    )
}