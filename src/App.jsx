import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "@/views/Root"
import PostsView from "@/views/PostsView"
import PostDetailView from "@/views/PostDetailView"
import AboutView from '@/views/AboutView'
import SearchView from "./views/SearchView"
import ErrorView from "./views/ErrorView"

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorView />}>
        <Route path="/r/:subreddit" element={<PostsView />}/>
        <Route path="/r/:subreddit/:id" element={<PostDetailView />} />
        <Route path="search" element={<SearchView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/404" element={<ErrorView />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}