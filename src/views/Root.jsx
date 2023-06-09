import Panel from "@/components/layout/Panel";
import NavBar from "@/components/layout/navBar/NavBar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Search from "../components/elements/Search/Search";
export default function Root() {
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
                    <div className="only-desktop is-sticky px-4 ">
                    <Search /></div>
                    <Outlet />
                    </div>
            </div>
        </div>
    )
}