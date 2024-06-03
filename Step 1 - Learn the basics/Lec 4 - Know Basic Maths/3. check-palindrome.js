/**
 * @article : https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/
 */

/*
  ✅ Problem Statement: 

  Given a number N reverse the number and print it.

  Example 1:
  Input: N = 123
  Output: Not Palindrome Number
  Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

  Example 2:
  Input: N =  121 
  Output: Palindrome Number
  Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.


*/

const checkIsPalindromeSolution1 = (number) => {
  let originalNumber = number;
  let reverseNumber = 0;

  for (number; number > 0; ) {
    const lastDigit = number % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    number = parseInt(number / 10);
  }

  const isPalindromeNumber = originalNumber === reverseNumber;

  return isPalindromeNumber;
};

const checkIsPalindromeSolution2 = (number) => {
  let numberString = number.toString();
  let reverseString = "";

  for (const char of numberString) {
    reverseString = char + reverseString;
  }

  const isPalindromeNumber = number === Number(reverseString);

  return isPalindromeNumber;
};

console.log("------------- Solution 1: ------------- ");
console.log("Is 123 Palindrome number? : ", checkIsPalindromeSolution1(123));
console.log("Is 121 Palindrome number? : ", checkIsPalindromeSolution1(121));

console.log("------------- Solution 2: ------------- ");
console.log("Is 123 Palindrome number? : ", checkIsPalindromeSolution2(123));
console.log("Is 121 Palindrome number? : ", checkIsPalindromeSolution2(121));
