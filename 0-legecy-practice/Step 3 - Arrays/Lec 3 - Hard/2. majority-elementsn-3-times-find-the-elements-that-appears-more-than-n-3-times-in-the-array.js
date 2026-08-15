/**
 * @article  : https://takeuforward.org/data-structure/majority-elementsn-3-times-find-the-elements-that-appears-more-than-n-3-times-in-the-array/
 * @question : https://leetcode.com/problems/majority-element-ii/
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty array.

  Example 1:
  Input Format: N = 5, array[] = {1,2,2,3,2}
  Result: 2
  Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.

  Example 2:
  Input Format:  N = 6, array[] = {11,33,33,11,33,11}
  Result: 11 33
  Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

*/

// Brute-force Solution
const majorityElementSolution1 = (arr) => {
  // Initialize an empty array to store the majority elements
  const majorityElements = [];

  // Iterate through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the majorityElements array is empty or the current element is not already in the majorityElements array
    if (majorityElements.length === 0 || majorityElements?.[0] !== arr[i]) {
      // Initialize a counter to count occurrences of the current element
      let count = 0;

      // Iterate through the array again to count occurrences of the current element
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count = count + 1; // Increment the counter if the elements match
        }
      }

      // Check if the count of the current element is greater than or equal to N/3 + 1
      if (count >= Math.floor(arr.length / 3) + 1) {
        // Add the current element to the majorityElements array
        majorityElements.push(arr[i]);
      }
    }

    // If we have found two majority elements, break out of the loop
    if (majorityElements.length === 2) {
      break;
    }
  }

  // Return the array of majority elements
  return majorityElements;
};

// Better Solution
const majorityElementSolution2 = (arr) => {
  // Create a map to store the frequency of each element in the array
  const numsMap = new Map();

  // Initialize an empty array to store the majority elements
  const majorityElements = [];

  // Iterate through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Update the frequency of the current element in the map
    numsMap.set(arr[i], (numsMap.get(arr[i]) || 0) + 1);

    // Check if the current element's frequency is greater than or equal to N/3 + 1
    if (numsMap.get(arr[i]) === Math.floor(arr.length / 3) + 1) {
      // Add the current element to the majorityElements array
      majorityElements.push(arr[i]);
    }

    // If we have found two majority elements, break out of the loop
    if (majorityElements.length == 2) {
      break;
    }
  }

  // Return the array of majority elements
  return majorityElements;
};

// Optimal Solution
const majorityElementSolution3 = (arr) => {
  // Extended Boyer Moore’s Voting Algorithm
  // This algorithm is used to find all elements that appear more than N/3 times in the array.

  // Initialize two potential majority elements and their respective counts
  let element1;
  let element2;
  let count1 = 0;
  let count2 = 0;

  // Calculate the minimum count required for an element to be considered a majority element
  const minimumElementsCount = Math.floor(arr.length / 3) + 1;

  // Array to store the final majority elements
  const majorityElements = [];

  // First pass: Identify the two potential majority elements
  for (let i = 0; i < arr.length; i++) {
    if (count1 === 0 && arr[i] !== element2) {
      // If count1 is zero and the current element is not element2, update element1
      element1 = arr[i];
      count1 = count1 + 1;
    } else if (count2 === 0 && arr[i] !== element1) {
      // If count2 is zero and the current element is not element1, update element2
      element2 = arr[i];
      count2 = count2 + 1;
    } else if (arr[i] === element1) {
      // If the current element matches element1, increment count1
      count1 = count1 + 1;
    } else if (arr[i] === element2) {
      // If the current element matches element2, increment count2
      count2 = count2 + 1;
    } else {
      // If the current element matches neither element1 nor element2, decrement both counts
      count1 = count1 - 1;
      count2 = count2 - 1;
    }
  }

  // Second pass: Verify the counts of the potential majority elements
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element1) {
      count1 = count1 + 1;
    } else if (arr[i] === element2) {
      count2 = count2 + 1;
    }
  }

  // Check if element1 is a valid majority element
  if (count1 >= minimumElementsCount) {
    majorityElements.push(element1);
  }

  // Check if element2 is a valid majority element
  if (count2 >= minimumElementsCount) {
    majorityElements.push(element2);
  }

  // Return the array of majority elements
  return majorityElements;
};

// Example 1 Input
const arr1 = [1, 2, 2, 3, 2];

// Example 2 Input
const arr2 = [11, 33, 33, 11, 33, 11];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution1(arr2));

// Time Complexity: O(N2), where N = size of the given array.
// Reason: For every element of the array the inner loop runs for N times. And there are N elements in the array. So, the total time complexity is O(N2).

// Space Complexity: O(1) as we are using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution2(arr2));

// Time Complexity: O(N)
// The function iterates through the array once, performing constant-time operations (like updating the map and checking conditions) for each element.
// Therefore, the time complexity is O(N), where N is the length of the input array.

// Space Complexity:  O(N)
// The function uses a Map to store the frequency of each element. In the worst case, the map could store up to N elements if all elements are unique.
// Additionally, the function uses an array majorityElements to store up to 2 elements.
// Therefore, the space complexity is O(N) due to the map.

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution3(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The majority elements are: ", majorityElementSolution3(arr2));

// Time Complexity: O(N) + O(N), where N = size of the given array.
// Reason: The first O(N) is to calculate the counts and find the expected majority elements. The second one is to check if the calculated elements are the majority ones or not.

// Space Complexity: O(1) as we are only using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.
