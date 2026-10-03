/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    // abcabcbb
    //       ij 

    let i = 0;
    let j = i + 1;

    let maxLength = 0; // 3

    const charSet = new Set(); // { a, b, c}
    charSet.add(s[i]);

    while (j < s.length) {
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

        j = j + 1;
    }

    return maxLength;
};