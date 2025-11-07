function dedupe(list) {
    if (list.length === 0) {
        //If array is empty
        return []; //returns empty array
    }

    const onlyOnce = []; //Empty array for adding the items in array found for the first time
    for (let i = 0; i < list.length; i++) {
        //loop
        if (onlyOnce.indexOf(list[i]) === -1) {
            //If in onlyOnce the item of the location i is not included
            onlyOnce.push(list[i]); //Adds the item in location i to the onlyOnce array
        }
    }
    return onlyOnce; //Array with unique items
}

module.exports = dedupe;
