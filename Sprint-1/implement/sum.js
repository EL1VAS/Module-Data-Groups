function sum(elements) {
    if (elements.length === 0) {
        return 0;
    }
    const numbers = [];
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number") {
            numbers.push(elements[i]);
        }
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

module.exports = sum;
