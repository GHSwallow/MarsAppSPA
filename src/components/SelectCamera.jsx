import {useContext, useEffect, useState} from "react";
import {getRoverCameraNames} from "../services/APIRequests.jsx";
import {mapArrayToSelectOptions} from "../../Helpers/populateListHelper.jsx";
import Select from "react-select";
import {CameraContext, RoverContext} from "../routes/SelectPhotos.jsx";

export default function SelectCamera() {
    const [cameras, setCameras] = useState()
    const { rover } = useContext(RoverContext);
    const { updateCamera } = useContext(CameraContext);

    useEffect( () => {
        if (rover) {
            getRoverCameraNames(rover.value)
                .then(cameras => {
                    setCameras(cameras.map((cam) => cam.name))
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [rover])

    return (
        <>
            <h4>
                Cameras
            </h4>
            <p>
                {(!cameras) ? ('loading...') : ''}
            </p>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={!cameras ? [] : mapArrayToSelectOptions(cameras)[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name="color"
                options={!cameras ? [] : mapArrayToSelectOptions(cameras)}
                onChange={(choice) => {updateCamera(choice)}}
            />
        </>
    )
}

