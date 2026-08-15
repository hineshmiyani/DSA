/**
 * @article  : https://www.geeksforgeeks.org/javascript-program-to-implement-a-circular-queue-using-arrays/
 * @article  : https://www.tutorialspoint.com/implementing-circular-queue-ring-buffer-in-javascript
 */

class CircularQueue {
  // Constructor to initialize the circular queue with a given capacity.
  constructor(capacity) {
    this.items = new Array(capacity); // Array to store queue elements.
    this.capacity = capacity; // Maximum capacity of the queue.
    this.rearIndex = -1; // Index of the rear element.
    this.frontIndex = -1; // Index of the front element.
    this.currentLength = 0; // Current number of elements in the queue.
  }

  // Checks if the queue is full.
  isFull() {
    return this.currentLength === this.capacity;
  }

  // Checks if the queue is empty.
  isEmpty() {
    return this.frontIndex === -1;
  }

  // Adds an element to the rear of the queue.
  enqueue(item) {
    if (!this.isFull()) {
      // Calculate the new rear index in a circular manner.
      this.rearIndex = (this.rearIndex + 1) % this.capacity;

      this.items[this.rearIndex] = item; // Add the new element to the rear.

      this.currentLength += 1; // Increment the current length.

      // If the queue was empty, set the front index to the rear index.
      if (this.frontIndex === -1) {
        this.frontIndex = this.rearIndex;
      }
    }
  }

  // Removes and returns the front element of the queue.
  dequeue() {
    if (this.isEmpty()) {
      return null; // Return null if the queue is empty.
    }

    const item = this.items[this.frontIndex]; // Get the front element.
    this.items[this.frontIndex] = null; // Remove the front element.

    // Calculate the new front index in a circular manner.
    this.frontIndex = (this.frontIndex + 1) % this.capacity;

    this.currentLength -= 1; // Decrement the current length.

    // If the queue becomes empty, reset the front and rear indices.
    if (this.isEmpty()) {
      this.frontIndex = -1;
      this.rearIndex = -1;
    }

    return item; // Return the removed element.
  }

  // Returns the front element of the queue without removing it.
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.frontIndex]; // Return the front element.
    }

    return null; // Return null if the queue is empty.
  }

  // Prints the elements of the queue in order from front to rear.
  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty"); // Print a message if the queue is empty.
    } else {
      let i;
      let string = "";

      // Iterate from the front index to the rear index in a circular manner.
      for (
        i = this.frontIndex;
        i !== this.rearIndex;
        i = (i + 1) % this.capacity
      ) {
        string += this.items[i] + " "; // Append each element to the string.
      }

      string += this.items[i]; // Append the rear element to the string.

      return string; // Return the string representation of the queue.
    }
  }

  // Getter for the current size of the queue.
  get size() {
    return this.currentLength;
  }
}

// Example usage of the CircularQueue class.
const queue = new CircularQueue(5);

console.log("isEmpty: ", queue.isEmpty()); // Check if the queue is empty.

queue.enqueue(10); // Add a new element to the queue.
queue.enqueue(20); // Add a new element to the queue.
queue.enqueue(30); // Add a new element to the queue.
queue.enqueue(40); // Add a new element to the queue.
queue.enqueue(50); // Add a new element to the queue.

console.log("size: ", queue.size); // Print the current size of the queue.

console.log("printQueue : ", queue.printQueue()); // Print the elements of the queue.

console.log("isFull: ", queue.isFull()); // Check if the queue is full.

console.log("dequeue: ", queue.dequeue()); // Remove and print the front element.

console.log("peek: ", queue.peek()); // Print the front element without removing it.

console.log("printQueue : ", queue.printQueue()); // Print the elements of the queue.

queue.enqueue(60); // Add a new element to the queue.

console.log("printQueue : ", queue.printQueue()); // Print the elements of the queue.
