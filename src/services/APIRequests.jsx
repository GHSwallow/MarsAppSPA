import MarsRoverServerRootUrl from "./Globals.jsx"

export const getRoverNames = async () => {
    const apiUrl = `${MarsRoverServerRootUrl}/rovers`
    console.log("fetching from  ", apiUrl)
    const a = await fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('getRoverNames response not ok')
            }
            console.log(response.json())
            return response.json()
        })
        .then((data) => data)

    return (
        <>
            {a}
        </>
    )
}