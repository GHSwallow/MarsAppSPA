import {useContext, useEffect, useState} from "react";
import {getRoverCameraPictures} from "../services/APIRequests.jsx";
import {CameraContext, RoverContext} from "../routes/SelectPhotos.jsx";

export default function DisplayPhoto() {
    const [images, setImages] = useState()
    const { rover } = useContext(RoverContext);
    const { camera } = useContext(CameraContext);

    useEffect( () => {
        if (rover && camera) {
            getRoverCameraPictures(rover.value, camera.value)
                .then(data => {
                    console.log(data)
                    setImages(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [rover, camera])

    return (
        <>
            <h4>
                Images
            </h4>
            <p>
                {(!images) ? ('loading...') : ''}
            </p>
            <ul>
                {(!images) ? 'tbd' : images.map((img) => <li key={img.img_src}> <img src={img.img_src}/></li>)}
            </ul>
        </>
    )
}

