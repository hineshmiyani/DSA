/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let i = 0;
    let j = i + 1;

    let maxLength = 0; // 3

    const charSet = new Map(); // { c:1, b:2 }
    charSet.set(s[i], i);

    while (j < s.length) {
        if (!charSet.has(s[j])) {
            charSet.set(s[j], j);
        } else {
            
            const index = charSet.get(s[j]);
            // charSet.delete(s[index]);

            if (index >= i) {
                i = index + 1;
            }

            charSet.set(s[j], j);
        }

        maxLength = Math.max(maxLength, (j - i) + 1);

        j = j + 1;
    }

    return maxLength;
};