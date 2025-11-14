function parseQueryString(queryString) {
    const queryParams = {};
    if (queryString.length === 0) {
        return queryParams;
    }
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
        const firstEqualIndex = pair.indexOf("=");
        const key = pair.slice(0, firstEqualIndex);
        const value = pair.slice(firstEqualIndex + 1);
        queryParams[key] = value;
    }

    return queryParams;
}

module.exports = parseQueryString;
