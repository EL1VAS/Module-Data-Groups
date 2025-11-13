// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//The for of loop is used in arrays and functions not in objects.
//I will write a function to extract all values

function authorValues(author) {
    return (
        author.firstName,
        author.lastName,
        author.occupation,
        author.age,
        author.alive
    );
}

const author = {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
};

console.log(value);
