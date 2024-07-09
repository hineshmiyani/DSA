/**
 * @article  : https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/
 * @question : https://leetcode.com/problems/majority-element/description/
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

  Example 1:
  Input Format : N = 3, nums[] = {3,2,3}
  Result : 3
  Explanation : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

  Example 2:
  Input Format: N = 7, nums[] = {2,2,1,1,1,2,2}
  Result : 2
  Explanation : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

  Example 3:
  Input Format: N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
  Result : 4

*/

// Brute-force Solution
const majorityElementSolution1 = (arr) => {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    let elementCount = 0; // Initialize a counter for the current element

    // Count occurrences of the current element in the array
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        elementCount = elementCount + 1; // Increment the counter if elements match
      }
    }

    // Check if the current element count is greater than half the array length
    if (elementCount > parseInt(arr.length / 2)) {
      return arr[i]; // Return the current element as the majority element
    }
  }

  // Return -1 if no majority element is found
  return -1;
};

// Better Solution
const majorityElementSolution2 = (arr) => {
  // Create a map to store the count of each element in the array
  const numberCountMap = new Map();

  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]; // Get the current element

    // If the element is already in the map, increment its count
    if (numberCountMap.has(element)) {
      numberCountMap.set(element, numberCountMap.get(element) + 1);
    } else {
      // If the element is not in the map, add it with a count of 1
      numberCountMap.set(element, 1);
    }
  }

  // Iterate through the map to find the majority element
  for (const [number, count] of numberCountMap) {
    // Check if the count of the current element is greater than half the array length
    if (count > parseInt(arr.length / 2)) {
      return number; // Return the majority element
    }
  }

  // Return -1 if no majority element is found
  return -1;
};

// Optimal Solution
const majorityElementSolution3 = (arr) => {
  // Moore's Voting Algorithm:
  // This algorithm is used to find the majority element in an array.
  // A majority element is an element that appears more than n/2 times in the array.

  let count = 0; // Initialize count to 0. This will keep track of the count of the current candidate element.
  let element = 0; // Initialize element to 0. This will store the current candidate for the majority element.

  // First pass: Find a candidate for the majority element.
  for (let index = 0; index < arr.length; index++) {
    if (count === 0) {
      // If count is 0, we set the current element as the candidate.
      element = arr[index];
      count = count + 1; // Increment count as we have one occurrence of the candidate.
    } else if (element === arr[index]) {
      // If the current element matches the candidate, increment the count.
      count = count + 1;
    } else {
      // If the current element does not match the candidate, decrement the count.
      count = count - 1;
    }
  }

  // Second pass: Verify if the candidate is actually the majority element.
  let majorityElementCount = 0; // Initialize a counter to count occurrences of the candidate.

  for (let index = 0; index < arr.length; index++) {
    if (element === arr[index]) {
      // If the current element matches the candidate, increment the counter.
      majorityElementCount = majorityElementCount + 1;
    }
  }

  // Check if the candidate occurs more than n/2 times.
  if (majorityElementCount > parseInt(arr.length / 2)) {
    return element; // If true, return the candidate as the majority element.
  }

  // If no majority element is found, return -1.
  return -1;
};

// Example 1 Input
const arr1 = [3, 2, 3];

// Example 2 Input
const arr2 = [2, 2, 1, 1, 1, 2, 2];

// Example 3 Input
const arr3 = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority element is: ", majorityElementSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority element is: ", majorityElementSolution1(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The majority element is: ", majorityElementSolution1(arr3));

// Time Complexity: O(N2), where N = size of the given array. Reason: For every element of the array the inner loop runs for N times. And there are N elements in the array. So, the total time complexity is O(N2).

// Space Complexity: O(1) as we use no extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority element is: ", majorityElementSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority element is: ", majorityElementSolution2(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The majority element is: ", majorityElementSolution2(arr3));

// Time Complexity:  O(N) + O(N) = O(N)
// The function iterates through the array twice:
// The first loop iterates through the array to populate the numberCountMap. This takes O(N) time, where N is the length of the array.
// The second loop iterates through the entries of the numberCountMap to find the majority element. In the worst case, this loop will also take O(N) time if all elements are unique.
// Therefore, the overall time complexity is O(N) + O(N) = O(N).

// Space Complexity: O(N)
// The space complexity is determined by the space required to store the numberCountMap.
// In the worst case, if all elements in the array are unique, the map will store N entries.
// Therefore, the space complexity is O(N).

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority element is: ", majorityElementSolution3(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority element is: ", majorityElementSolution3(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The majority element is: ", majorityElementSolution3(arr3));

// Time Complexity: O(N) + O(N), where N = size of the given array.
// Reason: The first O(N) is to calculate the count and find the expected majority element. The second one is to check if the expected element is the majority one or not.

// Note: If the question states that the array must contain a majority element, in that case, we do not need the second check. Then the time complexity will boil down to O(N).

// Space Complexity: O(1) as we are not using any extra space.
