export function populateHTMLList(array) {
    return array.map((arrayElement) =>
        <li key={arrayElement.toString()}> {arrayElement.toString()}</li>
    )
}

export function readyArrayForReactSelect(array) {
    const newArray = [];
    array.forEach((arrayElement) => {
        newArray.push({
            value: arrayElement,
            label: arrayElement
        })
    });
    return newArray
}