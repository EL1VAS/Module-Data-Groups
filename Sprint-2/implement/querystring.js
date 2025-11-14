function parseQueryString(queryString) {
    const queryParams = {}; //
    if (queryString.length === 0) {
        return queryParams;
    }
    const keyValuePairs = queryString.split("&"); // Split the string in pairs.

    for (const pair of keyValuePairs) {
        const firstEqualIndex = pair.indexOf("="); //First occurance of =
        const key = pair.slice(0, firstEqualIndex); //Slice on the left of first =
        const value = pair.slice(firstEqualIndex + 1); //Slice on the right of first =
        queryParams[key] = value; //Adding the key and value to the object
    }

    return queryParams;
}

module.exports = parseQueryString;
