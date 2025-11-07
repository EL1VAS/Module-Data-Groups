function findMax(elements) {
    const numbers = []; //Empty array to add only numerical items of the elements array
    for (
        let i = 0;
        i < elements.length;
        i++ //loop to search for numbers only
    )
        if (typeof elements[i] === "number") {
            numbers.push(elements[i]); //When a number is found is added to the end of the array
        }

    if (numbers.length === 0) {
        //If array is empty
        return -Infinity;
    }
    return Math.max(...numbers); //Mathematical max of the numbers spreaded array.
    // If we don't use the spreded array Math.max will see(numbers) as a whole item returning NaN
}

module.exports = findMax;
