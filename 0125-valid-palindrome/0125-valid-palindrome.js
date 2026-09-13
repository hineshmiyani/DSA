/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let left = 0;
    let right = cleanStr.length - 1;


    while (left < right) {
        if (cleanStr.charAt(left) !== cleanStr.charAt(right)) {
            return false;
        }

        left = left + 1;
        right = right - 1;
    }


    return true;
};