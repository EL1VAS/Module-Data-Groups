function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity;
    }
    return Math.max(elements);
}

module.exports = findMax;
