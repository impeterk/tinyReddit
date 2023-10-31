import Panel from "/src/components/layout/Panel";
import NavBar from "/src/components/layout/navBar/NavBar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Search from "../components/elements/Search/Search";


export default function Root() {
    const location = useLocation()
    if (location.pathname == '/') {
        return (
            <Navigate to="/reactjs" />
        )
    }

    return (
        <div className="container is-widescreen">
            <div className="columns m-0 p-0">
                <div className="column m-0 p-0 only-desktop mr-2"><Panel /></div>
                <div className="column mb-2 p-0 only-mobile"><NavBar /></div>
                <div className="column is-9 pt-0">
                    <div className="only-desktop is-sticky is-flex containter has-background-info-light py-2 ">
                        <Search />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}