function findMax(elements) {
    if (elements.length === 0) {
        //If list is empty
        return -Infinity;
    }
    return Math.max(elements); //Mathematical max of the elements value
}

module.exports = findMax;
