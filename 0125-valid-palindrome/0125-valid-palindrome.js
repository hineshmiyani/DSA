/**
 * QUICK NOTES — Valid Palindrome
 *
 * Pattern:
 * Two Pointers
 *
 * Core Idea:
 * Normalize the string by removing non-alphanumeric characters
 * and converting everything to lowercase. Then use two pointers
 * from both ends to compare characters.
 *
 * Key Trick:
 * We only need to compare characters from the outside toward the center.
 * If any pair does not match, the string cannot be a palindrome.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * - We traverse the string once to normalize it and then use two pointers
 *   to scan at most the entire normalized string.
 *
 * Space: O(n)
 * - The normalized string requires O(n) additional space.
 * - The two pointer variables use O(1) extra space.
 *
 * Why I struggled:
 * Remember that the comparison should ignore spaces, punctuation,
 * and letter casing, so the input needs to be normalized first.
 */

/**
 * Problem:
 * Determine whether a given string is a palindrome after converting
 * uppercase letters to lowercase and removing all non-alphanumeric
 * characters.
 *
 * Rules:
 * - Only letters and numbers are considered.
 * - Uppercase and lowercase letters should be treated as the same.
 * - The remaining characters must read the same forward and backward.
 *
 * Example:
 * Input: "A man, a plan, a canal: Panama"
 *
 * After normalization:
 * "amanaplanacanalpanama"
 *
 * Output:
 * true
 *
 * ————————————————————
 * Approach: Normalize String + Two Pointers
 *
 * Step 1:
 * - Remove all non-alphanumeric characters.
 * - Convert the remaining characters to lowercase.
 *
 * Step 2:
 * - Initialize one pointer at the beginning and another at the end.
 *
 * Step 3:
 * - Compare the characters at both pointers.
 * - If they differ, return false immediately.
 *
 * Step 4:
 * - Move both pointers toward the center.
 * - If all corresponding characters match, return true.
 *
 * ————————————————————
 * Why this works:
 * - A palindrome must have matching characters at equal distances
 *   from the beginning and the end.
 * - The two pointers compare exactly these corresponding characters.
 * - Checking all pairs until the pointers meet is sufficient.
 *
 * Simple Intuition:
 * Clean the string, then compare it from both ends toward the middle.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    // Normalize the string so that only lowercase letters and numbers remain.
    const normalizedString = s
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    let leftPointer = 0;
    let rightPointer = normalizedString.length - 1;

    /**
     * Compare characters from opposite ends.
     *
     * If the characters are different, the normalized string
     * cannot be a palindrome, so we can return false immediately.
     *
     * Moving both pointers inward checks every corresponding pair
     * without needing to create a reversed copy of the string.
     */
    while (leftPointer < rightPointer) {

        if (normalizedString.charAt(leftPointer) !== normalizedString.charAt(rightPointer)) {
            return false;
        }

        // Move both pointers one position toward the center.
        leftPointer++;
        rightPointer--;
    }

    // Every corresponding pair matched, so the string is a palindrome.
    return true;
};
