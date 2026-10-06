/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;

    let maxLength = 0; // 3

    const charSet = new Map(); // { c:1, b:2 }

    for (let j = 0; j < s.length; j++) {
        if (!charSet.has(s[j])) {
            charSet.set(s[j], j);
        } else {
            const index = charSet.get(s[j]);

            if (index >= i) {
                i = index + 1;
            }

            charSet.set(s[j], j);
        }

        maxLength = Math.max(maxLength, (j - i) + 1);
    }

    return maxLength;
};