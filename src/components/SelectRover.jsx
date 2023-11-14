import {useContext, useEffect, useState} from "react";
import {getRoverNames} from "../services/APIRequests.jsx";
import {mapArrayToSelectOptions} from "../../Helpers/populateListHelper.jsx";
import Select from "react-select";
import {Outlet} from "react-router-dom";
import {RoverContext} from "../routes/SelectPhotos.jsx";

export default function SelectRover() {
    const [rovers, setRovers] = useState()
    let { rover, updateRover } = useContext(RoverContext);

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
                {(!rovers) ? ('loading...') : ('')}
            </p>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={!rovers ? [] : mapArrayToSelectOptions(rovers)[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name="color"
                options={!rovers ? [] : mapArrayToSelectOptions(rovers)}
                onChange={(choice) => {updateRover(choice)}}
            />
            <Outlet/>
        </>
    )
}

