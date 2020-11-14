// A JS program to print the second most repeated character in an array
// and if multiple elements qualify then chooses the one nearest to the
// element repeated maximum number of times

"use strict";

const givenString = "askvvvvvv";
let i = 1;
let numRepeated = 0;
let maxRepeated = 0;
let maxStartingIndex = -1;
let startingIndex = -1;
let numSecondMaxRepeated = 0;
let maxRepeatedChar, secondMaxRepeatedChar;

// Calculate most repeated character
while (i < givenString.length) {
    if (givenString[i] == givenString[i - 1]) {
        if (numRepeated == 0) {
            startingIndex = i - 1;
        }
        numRepeated++;
        if (numRepeated > maxRepeated) {
            maxRepeated = numRepeated;
            maxStartingIndex = startingIndex;
            maxRepeatedChar = givenString[i];
        }
    } else {
        numRepeated = 0;
    }
    i++;
}

// Calculate second most repeated character
numRepeated = 0;
secondMaxRepeatedChar = givenString[0];
i = 1;

while (i < givenString.length) {
    if (i < maxStartingIndex || i > maxStartingIndex + maxRepeated) {
        if (givenString[i] == givenString[i - 1]) {
            numRepeated++;
            if (numRepeated >= numSecondMaxRepeated) {
                if (numRepeated == numSecondMaxRepeated) {
                    if (
                        Math.abs(
                            maxRepeatedChar.charCodeAt(0) -
                                secondMaxRepeatedChar.charCodeAt(0)
                        ) >=
                        Math.abs(
                            maxRepeatedChar.charCodeAt(0) -
                                givenString[i].charCodeAt(0)
                        )
                    ) {
                        secondMaxRepeatedChar = givenString[i];
                    }
                } else {
                    secondMaxRepeatedChar = givenString[i];
                }
                numSecondMaxRepeated = numRepeated;
            }
        } else if (numSecondMaxRepeated == 0) {
            if (
                Math.abs(
                    maxRepeatedChar.charCodeAt(0) -
                        secondMaxRepeatedChar.charCodeAt(0)
                ) >=
                Math.abs(
                    maxRepeatedChar.charCodeAt(0) - givenString[i].charCodeAt(0)
                )
            ) {
                secondMaxRepeatedChar = givenString[i];
            }
            numRepeated = 0;
        } else {
            numRepeated = 0;
        }
    }
    i++;
}

console.log("Second most repeated character: ", secondMaxRepeatedChar);
// Output is 's'
