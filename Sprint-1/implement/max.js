function findMax(elements) {
    const numbers = [];
    for (let i = 0; i < elements.length; i++)
        if (typeof elements[i] === "number") {
            numbers.push(elements[i]);
        }

    if (numbers.length === 0) {
        //If array is empty
        return -Infinity;
    }
    return Math.max(...numbers); //Mathematical max of the numbers spread
}

module.exports = findMax;
