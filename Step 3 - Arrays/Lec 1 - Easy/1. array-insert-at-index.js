/**
 * @question : https://www.geeksforgeeks.org/batch/dsa-javascript-self-paced-april/track/dsasp-js-basic-list/problem/array-insert-at-index
 */

const insertAtIndex = (arr, sizeOfArray, index, element) => {
  for (let i = sizeOfArray - 1; i >= index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = element;

  return arr;
};

const arr = [1, 2, 3, 4, 5];
const sizeOfArray = 6;
const index = 2;
const element = 90;

const output = insertAtIndex(arr, sizeOfArray, index, element);
console.log(output);
