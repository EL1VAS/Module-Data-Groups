// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
    for (const elements of list) {
        if (elements === target) {
            return true;
        }
    }
    return false;
}

module.exports = includes;
