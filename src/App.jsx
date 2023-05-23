import Root from "./views/Root"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}></Route>
))

export default function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}