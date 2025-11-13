// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

//I think it will log housenumber: 42 instead of 42.
//Because address[0] is the first pair of the object.
//My second guess is that address[0] reffers to an array position, hile we are dealing with an object here?

const address = {
    houseNumber: 42,
    street: "Imaginary Road",
    city: "Manchester",
    country: "England",
    postcode: "XYZ 123",
};

console.log(`My house number is ${address[0]}`);
