import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "@/views/Root"
import PostsView from "@/views/PostsView"
import PostDetailView from "@/views/PostDetailView"
import AboutView from '@/views/AboutView'

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route path="/r/:subreddit" element={<PostsView />}/>
        <Route path="/r/:subreddit/:id" element={<PostDetailView />} />
        <Route path="/about" element={<AboutView />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}