import {MarsPATHS} from "../routes/paths.jsx";
import GeneralButton from "./GeneralButton.jsx";
import {Outlet} from "react-router-dom";

export default function MarsApp() {
    const buttonInfo = {
        link: MarsPATHS.SelectPhotos,
        buttonMessage: 'click here',
    }
    console.log(buttonInfo)

    return (
        <>
            <p>
                Welcome! this is a website to interact with Mars rover data. Please select the rover and camera to display photos
                Click to explore
            </p>
            <GeneralButton info={{
                link: MarsPATHS.SelectPhotos,
                buttonMessage: 'click here',
            }}/>
            <Outlet/>
        </>
    )
}