import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"


export default function App() {
    return (
            <div className="columns mx-2 my-0 is-vertical is-mobile">
                <div className="column min-h-full is-3 has-background-info-dark"><h1>Hello</h1></div>
                <div className="column min-h-full is-9 has-backgound-link-light"><h2>World</h2></div>
            </div>
    )
}