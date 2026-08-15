/**
 * @article : https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/
 */

/*
  ✅ Problem Statement: 

  Given a number X,  print its factorial.
  To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.
  Note: X  is always a positive number. 

  Example 1:
  Input: X = 5
  Output: 120
  Explanation: 5! = 5*4*3*2*1

  Example 2:
  Input: X = 3
  Output: 6
  Explanation: 3!=3*2*1

  */

// Parameterized Recursion
const factorialOfNumbersSolution1 = (number, result = 1) => {
  if (number === 0) {
    console.log(result);
    return;
  }

  factorialOfNumbersSolution1(number - 1, number * result);
};

// Time Complexity: O(N)
// Space Complexity: O(1)

// Functional Recursion
const factorialOfNumbersSolution2 = (number) => {
  if (number === 0) {
    return 1;
  }

  return number * factorialOfNumbersSolution2(number - 1);
};

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log("------------- Solution 1: ------------- ");
console.log("Factorial of first 5 numbers: ");
factorialOfNumbersSolution1(5);
console.log("Factorial of first 6 numbers: ");
factorialOfNumbersSolution1(6);

console.log("------------- Solution 2: ------------- ");
console.log("Factorial of first 5 numbers: ", factorialOfNumbersSolution2(5));
console.log("Factorial of first 6 numbers: ", factorialOfNumbersSolution2(6));
