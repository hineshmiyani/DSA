/**
 * @article : https://takeuforward.org/recursion/introduction-to-recursion-understand-recursion-by-printing-something-n-times/
 */

/*
  ✅ Problem Statement: 

  Write a recursive code for printing numbers from 0 to 3 

*/

let number = 0;

const printNumber = () => {
  if (number === 4) {
    return;
  }

  console.log(number);

  number = number + 1;
  printNumber();
};

printNumber();
