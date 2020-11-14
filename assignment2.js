// String in Javascript are immutable ie str[5] = str[10] does not work
// So even though this question can be solved with O(n) time complexity
// and O(1) space complexity, with immuatble strings I have taken another string
// and therefore done with O(n) time and space complexity

"use strict";

let originalString = "abxdddd";
let countRepeated = 0;
let numCharactersRemoved = 0;
const initialStringLength = originalString.length;

if (initialStringLength < 3) console.log(originalString);

let i = 1;
let outputString = originalString[0];
while (i < originalString.length) {
    if (originalString[i] == originalString[i - 1] && countRepeated == 0) {
        countRepeated++;
        outputString += originalString[i];
    } else if (
        originalString[i] == originalString[i - 1] &&
        countRepeated == 1
    ) {
    } else {
        outputString += originalString[i];
        countRepeated = 0;
    }
    i++;
}

console.log("Desride string: ", outputString);
// OUTPUT is: abxdd
