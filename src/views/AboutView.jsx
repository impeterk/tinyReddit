export default function About() {
    return (
        <>
            <div className="container">
                <section className="hero is-medium is-desktop is-rounded is-info is-about">
                    <div className="hero-body has-text-centered">
                        <p className="title is-size-1">
                            <br />
                        </p>
                    </div>
                </section>
                <section className="card mt-4">
                    <div className="card-content">
                        <p className="title">About {`<React 2 Reddit />`}</p>
                    </div>
                    <div className="card-content has-text-justified">
                        <p className="my-4"> <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span>  is a web application that provides users with a simplified, read-only experience of Reddit, a popular online platform for social news aggregation, discussion, and content sharing. The application focuses on presenting Reddit content in a straightforward manner, without allowing users to post, comment, or interact with the content directly. </p>

                        <p className="my-4">The application is built using <strong>React</strong>, a JavaScript library for building user interfaces. React's component-based architecture allows for the creation of reusable UI components, making the application modular and efficient. This enables <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span> to handle complex data structures and render content dynamically, providing a smooth and responsive browsing experience. <strong>React Router</strong> is employed to handle routing within the application, allowing users to navigate between different views and components seamlessly.</p>

                        <p className="my-4">To manage the application's state and ensure efficient data flow, <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span> utilizes Redux. <strong>Redux</strong> is a state management library that centralizes the application's state, making it easier to manage and update. With Redux, TinyReddit can handle user interactions, maintain the application's current state, and update the UI accordingly, ensuring a consistent browsing experience.</p>

                        <p className="my-4">In terms of styling, <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span> employs Bulma CSS, a lightweight CSS framework. <strong>Bulma CSS</strong> provides a set of pre-defined styles, layout components, and utilities that help create a visually appealing and responsive user interface. The use of Bulma CSS ensures that the application is well-designed and adapts seamlessly to different screen sizes and devices, enhancing the overall user experience.</p>

                        <p className="my-4">By combining the power of React, Redux, and Bulma CSS, <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span> offers a user-friendly and visually appealing interface for browsing Reddit content. Users can explore various subreddits, view posts, read comments, and engage with the content through a simplified read-only mode. The application's responsiveness allows users to access and browse Reddit on different devices, making it accessible and convenient.</p>

                        <p className="my-4">Overall, <span className="is-family-monospace has-text-weight-semibold">{`<React 2 Reddit />`}</span> provides a streamlined and enjoyable way to consume Reddit content, leveraging the capabilities of React, Redux, and Bulma CSS to deliver a responsive, read-only Reddit experience.</p>
                    </div>
                </section>
            </div>
        </>
    )

}