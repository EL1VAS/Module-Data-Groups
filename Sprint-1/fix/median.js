// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
    const numbers = [];
    for (let i = 0; i < list.length; i++) {
        //Created a loop to check all list's indexes to find a number
        if (typeof list[i] === "number") {
            numbers.push(list[i]); //It adds the number found to the numbers array
        }
    }

    if (numbers.length === 0) {
        return null; //If loop finished and there is no number
    }

    const sorted = [...numbers].sort((a, b) => a - b); //Sorted the list of numbers ascending
    const middleIndex = Math.floor(sorted.length / 2); //Find the middle index by dividing the length of sorted number list in 2

    if (sorted.length % 2 === 0) {
        // If length of list is even
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2; //Find the mean of the two digits in the middle
    }

    return sorted[middleIndex];
}

module.exports = calculateMedian;
