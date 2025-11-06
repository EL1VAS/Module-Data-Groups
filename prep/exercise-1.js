// Can you fix this code?
function doubleAllNumbers(numbers) {
    let doubledNumbers = [];

    for (let n of numbers) {
        doubledNumbers.push(n * 2);
    }

    return doubledNumbers;
}

const myNums = [10, 20, 30];
const double = doubleAllNumbers(myNums);
console.log(double);
