export default function Footer(props) {

    const openModal = () => {
        document.getElementById("modal").className = "modal is-active"
    }

    const closeModal = () => {
        document.getElementById("modal").className = "modal"
    }


    return (
        <div>
            <div id="modal"className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                          Content ...  
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={closeModal} className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
            {/* <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title my-2 has-text-centered ml-5">React<span className="has-text-link">2</span>Reddit</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        Fesak
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={closeModal} className="button is-fullwidth is-link">Close</button>
                    </footer>
                </div>
            </div> */}
            <footer className="footer py-3">
                <div className="content has-text-centered">
                    <a className="mx-3 is-size-5" href="https://github.com/impeterk/tinyReact" target="_blank">Github</a>
                    <a id="modalButton" className="is-size-5" onClick={openModal}>React<span className="has-text-link">2</span>Reddit</a>
                </div>
            </footer>
        </div>
    )
}