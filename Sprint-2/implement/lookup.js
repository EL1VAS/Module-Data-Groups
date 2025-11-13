function createLookup(arrayPairs) {
    const lookup = {};
    for (let i = 0; i < arrayPairs.length; i++) {
        //Goes looping in the array
        const countryCode = arrayPairs[i][0]; //Define that countryCode is the index 0 of the pair
        const currencyCode = arrayPairs[i][1]; //Define that currencyCode is the index 1 of the pair
        lookup[countryCode] = currencyCode; //Added the key countryCode to lookup with value as currencyCode
    }
    return lookup; //Return the new object
}

module.exports = createLookup;
