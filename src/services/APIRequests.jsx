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
