import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"


export default function App() {
    return (
            <div className="columns m-2 is-mobile">
                <div className="column is-3 has-background-info"><h1>Hello</h1></div>
                <div className="column is-9 has-backgound-link-light"><h2>World</h2></div>
            </div>
    )
}