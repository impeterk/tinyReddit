import Panel from "@/components/layout/Panel";
import NavBar from "@/components/layout/navBar/NavBar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Search from "../components/elements/Search/Search";
import { selectIsLoading } from "../components/elements/navigation/subredditList/subredditSlice";
import { useSelector } from "react-redux";
export default function Root() {
    const loadingSubreddit = useSelector(selectIsLoading)
    const location = useLocation()
    if (location.pathname == '/') {
        return (
        <Navigate to="/r/reactjs" />
        )
    }
    return (
        <div className="container is-widescreen">
            <div className="columns m-0 p-0">
                <div className="column m-0 p-0 only-desktop"><Panel /></div>
                <div className="column p-0 m-0 only-mobile"><NavBar /></div>
                <div className="column is-9">
            <div className={`pageloader ${loadingSubreddit ? 'is-active' : 'display-none' } is-light`}><span className="title">Loading...</span></div>
                    <div className="only-desktop is-sticky px-4 ">
                    <Search /></div>
                    <Outlet />
                    </div>
            </div>
        </div>
    )
}