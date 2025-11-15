function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Input must be an array"); // I add this for the case that items are not an array
    }
    const countOfItems = {}; // Create empty object to add the count of items
    for (let i = 0; i < items.length; i++) {
        // Loop to check each value within the item if it is repeating
        if (countOfItems[items[i]]) {
            countOfItems[items[i]] += 1; // If indeed the value in item is repeated we add +1
        } else {
            countOfItems[items[i]] = 1; // If not repeated and it is found for the first time we add 1
        }
    }
    return countOfItems;
}

module.exports = tally;
