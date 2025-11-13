function parseQueryString(queryString) {
    const queryParams = {};
    const keyValuePairs = queryString.split("&");
    for (const pair of keyValuePairs) {
        const [key, value] = pair.split("=");
        queryParams[key] = value;
    }
    return queryParams;
}

module.exports = parseQueryString;
