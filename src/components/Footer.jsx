export default function Footer(props) {

    const openModal = () => {
        document.getElementById("modal").className = "modal is-active"
    }

    const closeModal = () => {
        document.getElementById("modal").className = "modal"
    }


    return (
        <div>
            <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-centered is-size-3 has-text-weight-semibold">{`<`}React<span className="has-text-link">2</span>Reddit{` />`}</p>
                    </header>
                    <section className="modal-card-body">
                        <p className="is-size-3 mb-5">About React<span className="has-text-link">2</span>Reddit</p>
                        <p className="content has-text-justified">
                            I have created this simple application as project for <a className="is-link" href="https://codecademy.com" target="_blank">CodeCademy</a> <strong>Front-end developer</strong> career path. <a href="https://reactjs.org/" target="_blank"><img className="image is-128x128 is-pulled-right"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo"/></a>This project was build using {`<React />`} as our Front end framework. This is simple reddit client, where we get browse reddit thanks to JSON API. Using this API instead of Reddits supported and well documented API unfortunately means, that we are limited with our features. We can not login, nor comment or like. <br/>
                            <strong>What can we do?</strong> We can still browse the reddit, change subreddit or search for posts. We can list them by "best", "hot" or "new". If we the post we see, we can redirect ourselves to reddit directly and interact there. <br/>
                            We have covered the front-end and some features of the applications. <a href="https://vitejs.dev/" target="_blank"><img className="image is-128x128 is-pulled-left"src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="VIte logo"/></a>But what about build? For building the application I was left with 2 major options <strong>Webpack</strong> or <strong>Vite</strong>. I have chosen the latter one. Vite is smaller, and faster then webpack. <br/>
                            There is a chatch however. This application was only build by React. In the beggining I made a choice to ditch Redux and build the app without it. It seemed like a good choice. The app was easier to build, less boilerplate code... But now I can clearly see the benefits, that Redux would bring. So my next goal is rewrite this Application using Redux as well and build some more features into it. 
                        </p>
                            <hr/>
                        <p className="is-size-3 mb-5">Features</p>
                        <div className="content">
                            <ul>
                                <li>Get Posts from subreddit</li>
                                <li>Change subreddit</li>
                                <li>Search reddit for posts</li>
                                <li>Redirect yourself to reddit for more information about the post</li>
                                <li>List posts by "best", "hot" or "new"</li>
                            </ul>
                        </div>
                        <hr/>
                        <p className="is-size-3 mb-5">About <span className="has-text-link">Me</span></p>
                        <p className="content has-text-justified">
                            I am 26 years old developer form Europe. This is my first React project builded from scratch. I am on my way to become full stack developer within near future. &#128521;<br/>
                            If you like what you see and would like more, better projects, consider leaving feedback on my github profile. This will motivate me to push myself even more. 
                        </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={closeModal} className="button is-fullwidth is-link">Close</button>
                    </footer>
                </div>
            </div>
            <footer className="footer py-3">
                <div className="content has-text-centered">
                    <a className="mx-3 is-size-5" href="https://github.com/impeterk/tinyReact" target="_blank">Github</a>
                    <a id="modalButton" className="is-size-5" onClick={openModal}>React<span className="has-text-link">2</span>Reddit</a>
                </div>
            </footer>
        </div>
    )
}