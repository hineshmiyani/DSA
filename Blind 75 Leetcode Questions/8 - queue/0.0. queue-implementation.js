/**
 * @article  : https://www.scaler.com/topics/javascript-queue/
 * @article  : https://www.geeksforgeeks.org/implementation-queue-javascript/
 */

class Queue {
  // Constructor initializes the queue with an empty object for items and sets both front and rear indices to 0.
  constructor() {
    this.items = {}; // Object to store queue elements
    this.frontIndex = 0; // Index of the front element
    this.rearIndex = 0; // Index of the rear element
  }

  // Method to add an item to the rear of the queue
  enqueue(item) {
    this.items[this.rearIndex] = item; // Add item at the rear index
    this.rearIndex = this.rearIndex + 1; // Increment the rear index

    return this.items; // Return the updated items object
  }

  // Method to remove an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty"); // Throw an error if the queue is empty
    }

    const item = this.items[this.frontIndex]; // Get the front item

    delete this.items[this.frontIndex]; // Remove the front item

    this.frontIndex = this.frontIndex + 1; // Increment the front index

    return item; // Return the removed item
  }

  // Method to get the front item without removing it
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty"); // Throw an error if the queue is empty
    }

    return this.items[this.frontIndex]; // Return the front item
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.size === 0; // Queue is empty if size is 0
  }

  // Method to print all items in the queue
  printQueue() {
    const queue = []; // Initialize an empty array to store queue elements

    for (let key in this.items) {
      const value = this.items[key]; // Get the value of each item
      queue.push(value); // Add the value to the queue array
    }

    return queue; // Return the array of queue elements
  }

  // Getter to calculate the size of the queue
  get size() {
    return this.rearIndex - this.frontIndex; // Size is the difference between rear and front indices
  }
}

// Example usage of the Queue class
const queue = new Queue();

console.log("isEmpty: ", queue.isEmpty()); // Check if the queue is empty

queue.enqueue(5); // Add 5 to the queue
queue.enqueue(10); // Add 10 to the queue
queue.enqueue(15); // Add 15 to the queue
queue.enqueue(20); // Add 20 to the queue
queue.enqueue(25); // Add 25 to the queue
queue.enqueue(30); // Add 30 to the queue

console.log("size 1: ", queue.size); // Print the size of the queue

queue.dequeue(); // Remove the front item (5)
queue.dequeue(); // Remove the next front item (10)

console.log("size 2: ", queue.size); // Print the size of the queue after two dequeues

console.log("isEmpty: ", queue.isEmpty()); // Check if the queue is empty

console.log("Queue: ", queue.printQueue()); // Print all items in the queue

console.log(queue); // Print the queue object
