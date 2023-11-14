import { useEffect, useState} from "react";
import {getRoverNames} from "./services/APIRequests.jsx";
import {readyArrayForReactSelect} from "../Helpers/populateListHelper.jsx";
import Select from "react-select";

export default function SelectRover() {
    const [rovers, setRovers] = useState()

    useEffect( () => {
        getRoverNames()
            .then(data => {
                setRovers(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h4>
                Rover info:
            </h4>
            <p>
                {(!rovers) ? ('loading...') : (rovers)}
            </p>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={!rovers ? [] : readyArrayForReactSelect(rovers)[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name="color"
                options={!rovers ? [] : readyArrayForReactSelect(rovers)}
            />
        </>
    )
}

