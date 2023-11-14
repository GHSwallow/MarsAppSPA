import Globals from "../Globals.jsx";

export const getRoverNames = async () => {
    const apiUrl = `${Globals.MarsRoverServerRootUrl}/rovers`
    console.log("fetching from  ", apiUrl)
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('getRoverNames response not ok')
            }
            return response.json()
        })
        .then((data) => data)
}


export const getRoverCameraNames = async (rover) => {
    const apiUrl = `${Globals.MarsRoverServerRootUrl}/rovers/${rover.toLowerCase()}`
    console.log("fetching from  ", apiUrl)
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('getRoverCameraNames response not ok')
            }
            return response.json()
        })
        .then((roverData) => roverData.cameras)
}

export const getRoverCameraPictures = async (rover, camera) => {
    const apiUrl = `${Globals.MarsRoverServerRootUrl}/rovers/${rover.toLowerCase()}/pictures/${camera.toLowerCase()}`
    console.log("fetching from  ", apiUrl)
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('getRoverCameraPictures response not ok')
            }
            return response.json()
        })
        .then((photoData) => photoData)
}
