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


    for (let i = 0; i < s.length; i++) {

        const sIndex = s[i].charCodeAt() - "a".charCodeAt();
        frequencyArr[sIndex] = frequencyArr[sIndex] + 1;

        const tIndex = t[i].charCodeAt() - "a".charCodeAt();
        frequencyArr[tIndex] = frequencyArr[tIndex] - 1;
    };

 

    for (const frequency of frequencyArr) {
        if (frequency !== 0) {
            return false;
        }
    }

    return true;

};