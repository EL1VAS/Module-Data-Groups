// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
    const sorted = [...list].sort((a, b) => a - b); //Sorted the list ascending
    const middleIndex = Math.floor(sorted.length / 2); //Find the middle index by dividing the length of sorted list in 2
    for (let i = 0; i < list.length; i++) {
        //Created a loop to check all list's indexes to find a number
        if (typeof list(i) === "number") {
            return false;
        }
    }
    return null; //If loop finished and there is no number

    if (sorted.length % 2 === 0) {
        // If length of list is even
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2; //Find the mean of the two digits in the middle
    }
    const median = sorted.splice(middleIndex, 1)[0]; //Take a piece of one digit from the middle index and give it a location
    return median;
}

module.exports = calculateMedian;
