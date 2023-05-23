import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"


export default function App() {
    return (
            <div className="contianer is-max-desktop my-0 columns">
                <div id="only-desktop" className="column mx-2 hero is-fullheight is-info is-3 has-background-info-dark"><h1>Hello</h1></div>
                <div id="only-mobile" className="column mx-2 hero is-info is-full is-3 has-background-info-dark"><h1>Hello</h1></div>
                <div className="column is-9 mx-2 has-backgound-link-light"><h2>World</h2></div>
            </div>
    )
}