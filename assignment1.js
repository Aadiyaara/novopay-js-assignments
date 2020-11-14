// According to the question assuming that the sorted matrix means
// that the matrix is sorted both ro and column wise

"use strict";

const mat = [
    [1, 2, 4, 7],
    [3, 5, 8, 11],
    [6, 9, 12, 14],
    [10, 13, 15, 16],
];

let i = 0;
let j = mat[0].length;

let found = false;
const toFind = 5;

while (i < mat.length && j >= 0) {
    if (mat[i][j] == toFind) {
        found = true;
        break;
    }
    if (mat[i][j] < toFind) i++;
    else j--;
}

if (found) {
    console.log("Found at: Row ", i + 1, ": Column ", j + 1);
} else {
    console.log("Not found");
}
