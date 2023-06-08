import Panel from "@/components/layout/Panel";
import NavBar from "@/components/layout/navBar/NavBar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Search from "../components/Search/Search";
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
                <div className="column is-9 px-2">
                    <Search className="only-desktop" />
                    <Outlet />
                    </div>
            </div>
        </div>
    )
}