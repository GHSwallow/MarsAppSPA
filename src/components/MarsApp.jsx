import SelectRover from "./SelectRover.jsx";

export default function MarsRoot() {

    return (
        <>
            <p>
                Welcome! this is a website to interact with Mars rover data. Please select the rover and camera to display photos
                Click to explore
            </p>
            <SelectRover/>
        </>
    )
}