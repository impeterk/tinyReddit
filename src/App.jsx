import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "/src/views/Root"
import PostsView from "/src/views/PostsView"
import PostDetailView from "/src/views/PostDetailView"
import AboutView from '/src/views/AboutView'
import SearchView from "./views/SearchView"
import ErrorView from "./views/ErrorView"
import { Helmet } from "react-helmet"

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorView />}>
        <Route path="/r/:subreddit" element={<PostsView />} />
        <Route path="/r/:subreddit/:id" element={<PostDetailView />} />
        <Route path="search" element={<SearchView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/404" element={<ErrorView />} />
    </Route>
))

export default function App() {
    return (
        <>
            <Helmet>
                <meta name="description"
                    content="React 2 Reddit is a web application that provides users with a simplified, read-only experience of Reddit, a popular online platform for social news aggregation, discussion, and content sharing. The application focuses on presenting Reddit content in a straightforward manner, without allowing users to post, comment, or interact with the content directly." />
                <title>React2Reddit</title>

                {/* Meta Tags */}
                <meta property="og:url" content="https://react2reddit.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="React2Reddit" />
                <meta property="og:description"
                    content="React 2 Reddit is a web application that provides users with a simplified, read-only experience of Reddit, a popular online platform for social news aggregation, discussion, and content sharing. The application focuses on presenting Reddit content in a straightforward manner, without allowing users to post, comment, or interact with the content directly." />
                <meta property="og:image" content="https://react2reddit.vercel.app/metaImage.webp " />
            </Helmet>
            <RouterProvider router={appRouter} />
        </>

    )
}