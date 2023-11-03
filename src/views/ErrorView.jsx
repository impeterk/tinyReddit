import { useNavigate } from "react-router-dom";

export default function ErrorView() {
    const navigate = useNavigate()

    const returnToHomePage = () => {
        navigate("/")
    }
    return (
        <div className="container is-flex is-flex-direction-column is-align-items-center">
            <h1 className="title mt-6">Oopsie Daisy</h1>
            <figure className="image">
                <img src="/assets/404.webp" alt="lego figurine holding disconnected power line" />
            </figure>
            <div className="mt-6">
                <button className="button is-medium is-info" onClick={returnToHomePage}>Return to Home Page</button>
            </div>
        </div>
    );
}; 