function parseQueryString(queryString) {
    const queryParams = {};

    const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
    queryParams[key] = value;

    return queryParams;
}
module.exports = parseQueryString;
