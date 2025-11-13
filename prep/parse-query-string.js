function parseQueryString(queryString) {
    const queryParams = {};
    const keyValuePair = queryString.split("=");
    const key = keyValuePair[0];
    const value = keyValuePair[1];
    queryParams[key] = value;
    return queryParams;
}

module.exports = parseQueryString;
