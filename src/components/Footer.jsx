export default function Footer(props) {
    let modal = document.getElementById("modal")

    const openModal = () => {
        modal.className = "modal is-active"
    }

    const closeModal = () => {
        modal.className = "modal"    
    }


    return (
        <footer className="footer py-3">
            <div className="content has-text-centered">
                <a className="mx-3 is-size-5" href="https://github.com/impeterk/tinyReact" target="_blank">Github</a>
                
                <div id="modal" className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <div className="box">
                            <p className="is-size-4">About React<span className="has-text-link">2</span>Reddit</p>
                        </div>
                    </div>
                    <button onClick={closeModal} className="modal-close is-large" aria-label="close"></button>
                </div>
                <a id="modalButton" className="is-size-5" onClick={openModal}>React<span className="has-text-link">2</span>Reddit</a>
            </div>
        </footer>
    )
}