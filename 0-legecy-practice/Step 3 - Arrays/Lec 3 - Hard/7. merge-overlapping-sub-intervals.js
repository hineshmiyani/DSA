/**
 * @article  : https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/
 * @question : https://leetcode.com/problems/merge-intervals/
 */

/*
  ✅ Problem Statement: 

  Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

  Example 1:
  Input: intervals=[[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6] intervals.

  Example 2:
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

*/

// Brute-force Solution
const mergeOverlappingIntervalsSolution1 = (intervals) => {
  // Check if the input is valid and if merging is necessary
  if (!intervals || intervals.length <= 1) {
    // If the input is null/undefined or has 0 or 1 interval, no merging is needed
    return intervals;
  }

  // Sort the intervals based on their start times
  // This ensures we process intervals in chronological order
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize an array to store the merged intervals
  const mergedIntervals = [];

  // Iterate through each interval in the sorted array
  for (let i = 0; i < intervals.length; i++) {
    const currentIntervalStart = intervals[i][0];
    let currentIntervalEnd = intervals[i][1];

    // Get the last merged interval (if any) for comparison
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    const lastMergedIntervalEnd = lastMergedInterval?.[1];

    // Check if the current interval is completely contained within the last merged interval
    if (
      mergedIntervals.length > 0 &&
      currentIntervalEnd <= lastMergedIntervalEnd
    ) {
      // If so, skip this interval as it's already covered
      continue;
    }

    // Look ahead to merge overlapping intervals
    for (let j = i + 1; j < intervals.length; j++) {
      if (currentIntervalEnd >= intervals[j][0]) {
        // If there's an overlap, extend the current interval's end time
        currentIntervalEnd = Math.max(currentIntervalEnd, intervals[j][1]);
      } else {
        // If no overlap is found, stop looking ahead
        break;
      }
    }

    // Add the merged interval to the result array
    mergedIntervals.push([currentIntervalStart, currentIntervalEnd]);
  }

  // Return the array of merged intervals
  return mergedIntervals;
};

// Optimal Solution
const mergeOverlappingIntervalsSolution2 = (intervals) => {
  // Check if input is valid (not null/undefined and has more than one interval)
  if (!intervals || intervals.length <= 1) {
    return intervals; // Return input as is if it's invalid or doesn't need merging
  }

  // Sort intervals based on first element of each interval
  // This ensures we can process intervals in order and easily find overlaps
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize result array with the first interval
  // This avoids a special case check in the loop
  const mergedIntervals = [intervals[0]];

  // Iterate through the remaining intervals (skip the first one as it's already in mergedIntervals)
  for (const currentInterval of intervals.slice(1)) {
    // Get the last interval in our merged result
    // This is the interval we'll potentially merge with the current interval
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    // Check if current interval overlaps with the last merged interval
    // Overlap occurs if the start of current interval is less than or equal to the end of last merged interval
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Overlap found, merge intervals
      // Update the end element of the last merged interval to be the maximum of:
      // 1) the end element of the last interval
      // 2) the end element of the current interval
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // No overlap, add current interval to result
      // This creates a new interval in the result array
      mergedIntervals.push(currentInterval);
    }
  }

  // Return the array of merged intervals
  return mergedIntervals;
};

// Example 1 Input
const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// Example 2 Input
const intervals2 = [
  [1, 4],
  [4, 5],
];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The merged intervals are: ",
  mergeOverlappingIntervalsSolution1(intervals1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The merged intervals are: ",
  mergeOverlappingIntervalsSolution1(intervals2)
);

// Time Complexity: O(N*logN) + O(2*N), where N = the size of the given array.
// Reason: Sorting the given array takes  O(N*logN) time complexity. Now, after that, we are using 2 loops i and j. But while using loop i, we skip all the intervals that are merged with loop j. So, we can conclude that every interval is roughly visited twice(roughly, once for checking or skipping and once for merging). So, the time complexity will be 2*N instead of N2.

// Space Complexity: O(N), as we are using an answer list to store the merged intervals. Except for the answer array, we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The merged intervals are: ",
  mergeOverlappingIntervalsSolution2(intervals1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The merged intervals are: ",
  mergeOverlappingIntervalsSolution2(intervals2)
);

// Time Complexity: O(N*logN) + O(N), where N = the size of the given array.
// Reason: Sorting the given array takes  O(N*logN) time complexity. Now, after that, we are just using a single loop that runs for N times. So, the time complexity will be O(N).

// Space Complexity: O(N), as we are using an answer list to store the merged intervals. Except for the answer array, we are not using any extra space.
