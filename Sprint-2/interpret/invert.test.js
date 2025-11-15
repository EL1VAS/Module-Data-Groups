const invert = require("./invert.js");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
// Test for object with one pair key value

test("when a one pair object is passed to invert, returns the object with swapped key value", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" }); //Found out that keys in objects are always strings, so it has to return a string "a".
    //Writting 1:"a" means that since 1 in now the key is already turned to a string
});

test("when more than one pair object is passed to invert, returns the object with swapped keys values", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("when an object with a key and 0 as value is passed to invert, returns the object with swapped key value", () => {
    expect(invert({ a: 0 })).toEqual({ 0: "a" });
});

test("when an object with a key and a symbol as value is passed to invert, returns the object with swapped key value", () => {
    expect(invert({ a: "&" })).toEqual({ "&": "a" }); // Important here are the "" as Javascript doesn't read the symbols as a string otherwise
});

test("when the input passed to invert is not an object, returns an error message", () => {
    expect(() => invert(["a", 1], ["b", 2])).toThrow();
});
