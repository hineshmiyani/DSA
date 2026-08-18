/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const frequencyArr = new Array(26).fill(0);


    for (const char of s) {
        const index = char.charCodeAt() - "a".charCodeAt();
        frequencyArr[index] = frequencyArr[index] + 1;
    };

    for (const char of t) {
        const index = char.charCodeAt() - "a".charCodeAt();
        frequencyArr[index] = frequencyArr[index] - 1;
    }

    for (const frequency of frequencyArr) {
        if (frequency !== 0) {
            return false;
        }
    }

    return true;

};