export function mapArrayToSelectOptions(array) {
    const newArray = [];
    array.forEach((arrayElement) => {
        newArray.push({
            value: arrayElement,
            label: arrayElement
        })
    });
    return newArray
}