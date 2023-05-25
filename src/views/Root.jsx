import Panel from "../components/layout/Panel";
import NavBar from "../components/layout/NavBar";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation()
    if (location.pathname == '/') {
        return (
        <Navigate to="/r/fesak" />
        )
    }

    return (
        <div className="container is-widescreen">
            <div className="columns m-0 p-0">
                <div id="only-desktop" className="column m-0 p-0"><Panel /></div>
                <div id="only-mobile" className="column p-0 m-0"><NavBar /></div>
                <div className="column is-9 px-2"><Outlet /></div>
            </div>
        </div>
    )
}