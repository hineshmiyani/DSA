/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {

        const stringSet = new Set();

        let currentLength = 0;

        for (let j = i; j < s.length; j++) {
            if (!stringSet.has(s[j])) {
                stringSet.add(s[j]);
                currentLength = currentLength + 1;
            } else {
                break;
            }

        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};