/**
 * @article  : https://algo.monster/liteproblems/295
 * @article  : https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/
 * @article  : https://leetcode.com/problems/find-median-from-data-stream/solutions/329657/javascript-max-heap-min-heap
 * @question : https://leetcode.com/problems/find-median-from-data-stream
 * @question : https://neetcode.io/problems/find-median-in-a-data-stream
 */

const {
  MaxPriorityQueue,
  MinPriorityQueue,
} = require("@datastructures-js/priority-queue");

/*
  ✅ Problem Statement: 

  The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

  For example, for arr = [2,3,4], the median is 3.
  For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
  Implement the MedianFinder class:

  MedianFinder() initializes the MedianFinder object.
  void addNum(int num) adds the integer num from the data stream to the data structure.
  double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

  Example 1:
  Input
  ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
  [[], [1], [2], [], [3], []]

  Output
  [null, null, null, 1.5, null, 2.0]

  Explanation
  MedianFinder medianFinder = new MedianFinder();
  medianFinder.addNum(1);    // arr = [1]
  medianFinder.addNum(2);    // arr = [1, 2]
  medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
  medianFinder.addNum(3);    // arr[1, 2, 3]
  medianFinder.findMedian(); // return 2.0

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Initialization:
     - We need to maintain two heaps: a `max-heap` to store the smaller half of the numbers and a `min-heap` to store the larger half.
     - The `MaxPriorityQueue` will be used for the `max-heap` and the `MinPriorityQueue` for the `min-heap`.
     - The max-heap will allow us to quickly access the largest number in the smaller half, and the min-heap will allow us to quickly access the smallest number in the larger half.
     - The `MedianFinder` class will have two properties: `maxHeap` and `minHeap`.

  2. Adding a Number (`addNum` method):
     - When a new number is added using the `addNum` method, we need to decide which heap to add it to.
       - If the number is smaller than or equal to the maximum element of the max-heap (or if the max-heap is empty), it should be added to the max-heap.
       - Otherwise, it should be added to the min-heap.
     - After adding the number, we need to balance the heaps to ensure that the difference in size between the two heaps is at most 1.
       - If the max-heap has more than one extra element compared to the min-heap, move the root of the max-heap to the min-heap.
       - Similarly, if the min-heap has more than one extra element compared to the max-heap, move the root of the min-heap to the max-heap.
  
  3. Finding the Median (`findMedian` method):
     - If both heaps have the same size, the median is the average of the roots of both heaps.
     - If the max-heap has more elements, the median is the root of the max-heap.
     - If the min-heap has more elements, the median is the root of the min-heap.

  4. Example:
     - For the input sequence [1, 2, 3]:
       - Add 1: max-heap = [1], min-heap = []
       - Add 2: max-heap = [1], min-heap = [2]
       - Find median: (1 + 2) / 2 = 1.5
       - Add 3: max-heap = [1], min-heap = [2, 3]
       - Balance heaps: max-heap = [1, 2], min-heap = [3]
       - Find median: 2

  This approach ensures that both the insertion and median finding operations are efficient, with a time complexity of O(log n) for insertion and O(1) for finding the median.
*/

/**
 * MedianFinder class is designed to find the median of a stream of numbers.
 * It uses two heaps: a max-heap to store the smaller half of the numbers and a min-heap to store the larger half.
 */
class MedianFinder {
  constructor() {
    // A max-heap to store the smaller half of the numbers.
    this.maxHeap = new MaxPriorityQueue();

    // A min-heap to store the larger half of the numbers.
    this.minHeap = new MinPriorityQueue();
  }

  /**
   * Adds a number into the data structure.
   * @param {number} num - The number to be added to the data structure.
   */
  addNum(num) {
    // Add number to the appropriate heap
    if (this.maxHeap.isEmpty() || num < this.maxHeap.front().element) {
      this.maxHeap.enqueue(num); // Add to max-heap if it's empty or num is smaller than the max element in max-heap
    } else {
      this.minHeap.enqueue(num); // Otherwise, add to min-heap
    }

    // Balance the heaps if their sizes differ by more than 1
    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      // If max-heap has more elements than min-heap by more than 1, move the root of max-heap to min-heap
      const dequeuedNum = this.maxHeap.dequeue().element;
      this.minHeap.enqueue(dequeuedNum);
    } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
      // If min-heap has more elements than max-heap by more than 1, move the root of min-heap to max-heap
      const dequeuedNum = this.minHeap.dequeue().element;
      this.maxHeap.enqueue(dequeuedNum);
    }
  }

  /**
   * Finds the median of the current data stream.
   * @returns {number} - The median of the numbers.
   */
  findMedian() {
    // If both heaps are of the same size, the median is the average of the roots of both heaps
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
    } else if (this.maxHeap.size() > this.minHeap.size()) {
      // If max-heap has more elements, the median is the root of max-heap
      return this.maxHeap.front().element;
    } else {
      // If min-heap has more elements, the median is the root of min-heap
      return this.minHeap.front().element;
    }
  }
}

// Example 1 Input
const input = [
  "MedianFinder",
  "addNum",
  "addNum",
  "findMedian",
  "addNum",
  "findMedian",
];

const inputValue = [[], [1], [2], [], [3], []];

const medianFinder = new MedianFinder();

const getCombinedHeapValues = () => [
  ...medianFinder.maxHeap.toArray().map(({ element }) => element),
  ...medianFinder.minHeap.toArray().map(({ element }) => element),
];

console.log("\n\n ------------- Solution 1: -------------");
// console.log("\n ------------- Example 1: ------------- \n");

medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]

console.log(
  `Median of ${getCombinedHeapValues()}: `,
  medianFinder.findMedian()
); // return 1.5 (i.e., (1 + 2) / 2)

medianFinder.addNum(3); // arr[1, 2, 3]

console.log(
  `Median of ${getCombinedHeapValues()}: `,
  medianFinder.findMedian()
); // return 2.0

// # Time Complexity:
// - The `addNum` method has a time complexity of O(log n) due to the heap operations (enqueue and dequeue).
// - The `findMedian` method has a time complexity of O(1) since it only involves accessing the root elements of the heaps.

// # Space Complexity:
// - The space complexity is O(n), where n is the number of elements added to the data structure, as both heaps store all the elements.
