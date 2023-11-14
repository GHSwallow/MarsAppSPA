import SelectRover from "../components/SelectRover.jsx";
import {createContext, useState} from "react";
import SelectCamera from "../components/SelectCamera.jsx";
import DisplayPhoto from "../components/DisplayPhoto.jsx";

export const RoverContext = createContext(null);
export const CameraContext = createContext(null);

export default function SelectPhotos(){
    const [rover, updateRover] = useState()
    const [camera, updateCamera] = useState()

    return (
        <>
            <RoverContext.Provider value={{rover, updateRover}}>
                <CameraContext.Provider value={{camera, updateCamera}}>
                    <SelectRover/>
                    <SelectCamera/>
                    <DisplayPhoto/>
                </CameraContext.Provider>
            </RoverContext.Provider>
        </>
    )
}

