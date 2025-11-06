// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
    let arr = []; //Made arr an array
    const first = arr[0]; //Indivates the first digit location of the array
    const last = arr[arr.length - 1]; //Indicates the lst digit location of the array
    arr[0] = last; //Because I can't reassign a new value to a const and we want the first position to hold the value of the last
    arr[arr.length - 1] = first;
}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray); // what output should we expect?
