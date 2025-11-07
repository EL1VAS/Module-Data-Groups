// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element !== target) {
            return false;
        } else if (element === target) {
            return true;
        }
    }
}

module.exports = includes;
