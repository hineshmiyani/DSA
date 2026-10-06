/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // abcabcbb
    //       ij 

    let i = 0;

    let maxLength = 0; // 3

    const charSet = new Set(); // { a, b, c}

    for (let j = 0; j < s.length; j++) {
        if (!charSet.has(s[j])) {
            charSet.add(s[j]);
        } else {
            while (i < s.length && charSet.has(s[j])) {
                charSet.delete(s[i]);
                i = i + 1;
            }

            charSet.add(s[j]);
        }

        maxLength = Math.max(maxLength, (j - i) + 1);
    }

    return maxLength;
};