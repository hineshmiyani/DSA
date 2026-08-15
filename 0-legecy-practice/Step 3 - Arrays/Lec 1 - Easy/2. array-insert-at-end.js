/**
 * @question : https://www.geeksforgeeks.org/batch/dsa-javascript-self-paced-april/track/dsasp-js-basic-list/problem/array-insert-at-end
 */

const insertAtEnd = (arr, sizeOfArray, element) => {
  arr[sizeOfArray - 1] = element;
  return arr;
};

const arr = [1, 2, 3, 4, 5];
const sizeOfArray = 6;
const element = 90;

const output = insertAtEnd(arr, sizeOfArray, element);
console.log(output);
