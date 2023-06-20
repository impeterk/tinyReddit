import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function ErrorView() {
    const navigate = useNavigate()
    const [timer, setTimer] = useState(5)

    // const updateTimer = () => {
    //     if (parseInt(timer) > 0) {
    //         setTimer((value) => {
    //             return value -= 1
    //         })
    //     }
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => updateTimer(), 1000)
    //     return () => clearInterval(interval)

    // }, [])

    // if (timer == 0) {
    //     return (
    //         <Navigate to="/" />
    //     )

    // }
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
                {/* <p className="subtitle">You will be redirected in:</p>
                <p className="title mt-2 has-text-centered">
                    {timer}
                </p> */}
                <button className="button is-medium is-info" onClick={returnToHomePage} >Return to Home Page</button>
            </div>
        </div>
    );
}; 