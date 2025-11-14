const invert = require("./invert.js");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
// Test for object with one pair key value

test("when a one pair object is passed to invert, returns the object with swapped key value", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
