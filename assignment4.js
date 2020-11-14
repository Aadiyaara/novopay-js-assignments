// A JS program to convert an object to an array

"use strict";

const sampleObject = {
    firstName: "Aditya",
    lastName: "Sharma",
};

// An array of all keys of the object
const propertyNames = Object.keys(sampleObject);
console.log(propertyNames);
// OUTPUT is: [ 'firstName', 'lastName' ]

// An array of all values of the object
const propertyValues = Object.values(sampleObject);
console.log(propertyValues);
// OUTPUT is: [ 'Aditya', 'Sharma' ]

// An array of all entries of the object
const entries = Object.entries(sampleObject);
console.log(entries);
// OUTPUT is: [ [ 'firstName', 'Aditya' ], [ 'lastName', 'Sharma' ] ]
