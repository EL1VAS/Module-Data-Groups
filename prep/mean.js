function calculateMean(list) {
    let total = 0;
    for (const item of list) {
        total += item;
    }
}

function calculateMedian(list) {
    const middleIndex = Math.floor(list.length / 2);
    const median = list.splice(middleIndex, 1)[0];

    return median;
}

const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);
