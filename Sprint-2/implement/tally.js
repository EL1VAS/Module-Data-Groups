function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Input must be an array");
    }
    const countOfItems = {};
    for (let i = 0; i < items.length; i++) {
        if (countOfItems[items[i]]) {
            countOfItems[items[i]] += 1;
        } else {
            countOfItems[items[i]] = 1;
        }
    }
    return countOfItems;
}

module.exports = tally;
