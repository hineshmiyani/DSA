/**
 * @article : https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/
 */

/*
  ✅ Problem Statement: 

  Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

  Example 1:
  Input: Str =  “ABCDCBA”
  Output: Palindrome
  Explanation: String when reversed is the same as string.

  Example 2:
  Input: Str = “TAKE U FORWARD”
  Output: Not Palindrome
  Explanation: String when reversed is not the same as string.

*/

const checkPalindrome = (string, index = 0) => {
  if (index >= parseInt(string.length / 2)) {
    return true;
  }

  if (string.charAt(index) !== string.charAt(string.length - index - 1)) {
    return false;
  }

  return checkPalindrome(string, index + 1);
};

// Time Complexity: O(n/2) => O(n)
// Space Complexity: O(1)

console.log("------------- Solution 1: ------------- ");
let string1 = "ABCDCBA";
console.log(`Is ${string1} Palindrome: `, checkPalindrome(string1));

let string2 = "TAKE U FORWARD";
console.log(`Is ${string2} Palindrome: `, checkPalindrome(string2));
