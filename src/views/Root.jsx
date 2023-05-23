import Panel from "../components/layout/Panel";
import NavBar from "../components/layout/NavBar";
import Menu from "../components/layout/Menu";

export default function Root() {
    return (
        <div className="container is-max-widescreen">
            <div className="columns m-0 p-0">
                <div id="only-desktop" className="column m-0 p-0"><Panel /></div>
                <div id="only-mobile" className="column p-0"><NavBar /></div>
                <div className="column is-9 px-2"><h2>World</h2></div>
            </div>
        </div>
    )
}