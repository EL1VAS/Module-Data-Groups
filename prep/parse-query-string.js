function parseQueryString(queryString) {
    const queryParams = {};
    if (queryString.length === 0) {
        return queryParams;
    }

    const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
    queryParams[key] = value; // will set the property name with the value of the key variable

    return queryParams;
}

module.exports = parseQueryString;
