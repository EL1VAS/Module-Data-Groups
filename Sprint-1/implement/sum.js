function sum(elements) {
    if (elements.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < elements.length; i++) {
        total += elements[i];
    }
    return total;
}

module.exports = sum;
