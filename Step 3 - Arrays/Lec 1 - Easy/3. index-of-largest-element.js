const indexOfLargestElement = (arr) => {
  let largestElementIndex = 0;

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > arr[largestElementIndex]) {
      largestElementIndex = index;
    }
  }

  return largestElementIndex;
};

const arr = [1, 2, 3, 4, 55, 6];
const output = indexOfLargestElement(arr);
console.log("Largest element index: ", output);
