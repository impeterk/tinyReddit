import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./views/Root"
import PostsArray from "./views/PostsArray"
import PostDetail from "./views/PostDetail"

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<PostsArray />} />
        <Route path=":id" element={<PostDetail />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}