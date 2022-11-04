import '../Helpers/Cookies.css'

export default function Cookies(props) {
    const removeCookies = () => {
        document.getElementById("cookies").remove()
    }

    return (
        <article id="cookies" className="message is-info cookies m-2">
            <div className="message-header">
                <p>Cookies</p>
            </div>
            <div className="message-body">
                Just so you know, this website uses cookies. <a href="https://www.cookiesandyou.com/" target="_blank">What are cookies?</a><br />
                <button onClick={removeCookies} className="button m-3 is-outlined is-success has-text-weight-semibold">&#128077; Got It!</button>
            </div>
        </article>
    )
}