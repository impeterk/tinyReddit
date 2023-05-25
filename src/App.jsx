import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./views/Root"
import Subreddit from "./views/Subreddit"
import PostDetail from "./views/PostDetail"

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route path="/r/:subreddit" element={<Subreddit />} />
        <Route path=":id" element={<PostDetail />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}