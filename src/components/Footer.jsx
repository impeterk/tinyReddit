export default function Footer(props) {

    const handleModal = () => {
        let modal = document.getElementById("modal")
        modal.className === "modal is-active"
    }


    return (
        <footer className="footer py-3">
            <div className="content has-text-centered">
                <a className="mx-3 is-size-5" href="https://github.com/impeterk/tinyReact" target="_blank">Github</a>
                
                <div id="modal" className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <p>Modal works</p>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
                <a id="modalButton" onClick={handleModal}>About us</a>
            </div>
        </footer>
    )
}