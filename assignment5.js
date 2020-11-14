// A JS program to validate and remove spl. characters from a string

"use strict";

const givenString = "ABC%sadasd.;[;fdl;dfsdf*$#dvfdsf";
const desiredString = givenString.replace(/[^\w\s]/gi, "");

if (givenString.length != desiredString.length)
    console.log("The given string contains spl. characters");
else console.log("The given string contains NO spl. characters");
// Output is:  The given string contains spl. characters

console.log("Resulting string on reemoving spl. characters: ", desiredString);
// Output is:ABCsadasdfdldfsdfdvfdsf
