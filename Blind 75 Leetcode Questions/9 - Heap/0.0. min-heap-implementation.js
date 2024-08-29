/**
 * @article  : https://www.geeksforgeeks.org/min-heap-in-javascript/
 */

class MinHeap {
  constructor() {
    // Initialize an empty array to store heap elements
    this.heap = [];
  }

  // Helper Methods

  // Get the index of the left child of the given parent index
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // Get the index of the right child of the given parent index
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  // Get the index of the parent of the given child index
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  // Check if the node at the given index has a left child
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  // Check if the node at the given index has a right child
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  // Check if the node at the given index has a parent
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  // Get the left child of the node at the given index
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  // Get the right child of the node at the given index
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  // Get the parent of the node at the given index
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Methods to create Min Heap

  // Swap the elements at the given indices
  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  // Add a new item to the heap
  add(item) {
    if (typeof item !== "number") {
      throw new Error("Only numbers can be added to the heap.");
    }

    // Add the new item to the end of the heap
    this.heap.push(item);
    // Restore the heap property by moving the new item up
    this.heapifyUp();
  }

  // Move the last item up to restore the heap property
  heapifyUp() {
    let index = this.heap.length - 1;

    // While the item has a parent and is smaller than its parent
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      // Swap the item with its parent
      this.swap(index, this.getParentIndex(index));

      // Update the index to the parent's index
      index = this.getParentIndex(index);
    }
  }

  // Remove and return the smallest item from the heap
  remove() {
    if (this.heap.length === 0) {
      throw new Error(
        "Heap Underflow! The heap is empty, so no items can be removed."
      );
    }

    // Store the smallest item (root of the heap)
    const item = this.heap[0];

    // Replace the root with the last item in the heap
    this.heap[0] = this.heap[this.heap.length - 1];

    // Remove the last item from the heap
    this.heap.pop();

    // Restore the heap property by moving the new root down
    this.heapifyDown();

    return item;
  }

  // Move the root item down to restore the heap property
  heapifyDown() {
    let index = 0;

    // While the item has a left child
    while (this.hasLeftChild(index)) {
      // Assume the left child is the smaller child
      let smallerChildIndex = this.getLeftChildIndex(index);

      // If the item has a right child and the right child is smaller than the left child
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        // Update the smaller child index to the right child index
        smallerChildIndex = this.getRightChildIndex(index);
      }

      // If the item is smaller than the smaller child, the heap property is restored
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        // Swap the item with the smaller child
        this.swap(index, smallerChildIndex);
      }

      // Update the index to the smaller child's index
      index = smallerChildIndex;
    }
  }

  // Print the heap as a space-separated string
  printHeap() {
    let string = this.heap.join(" ");

    // console.log(string);
    return string;
  }
}

// Example usage of the MinHeap class
const heap = new MinHeap();

// Add elements to the heap
heap.add(10);
heap.add(20);
heap.add(30);
console.log("Print 1: ", heap.printHeap()); // Output: 10 20 30

heap.add(5);
console.log("Print 2: ", heap.printHeap()); // Output: 5 10 30 20

heap.add(40);
heap.add(50);
console.log("Print 3: ", heap.printHeap()); // Output: 5 10 30 20 40 50

// Remove elements from the heap
heap.remove();
console.log("Print 4: ", heap.printHeap()); // Output: 10 20 30 50 40

heap.remove();
console.log("Print 5: ", heap.printHeap()); // Output: 20 40 30 50
