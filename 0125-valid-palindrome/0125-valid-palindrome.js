/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    


    let left = 0;
    let right = s.length - 1;


    while (left < right) {

        while (left < right && !isAlphaNumeric(s.charAt(left))) {
            left = left + 1;
        }

        while (right > left && !isAlphaNumeric(s.charAt(right))) {
            right = right - 1;
        }


        if (s.toLowerCase().charAt(left) !== s.toLowerCase().charAt(right)) {
            return false;
        }

        left = left + 1;
        right = right - 1;
    }


    return true;
};

var isAlphaNumeric = function (char) {
    return (char >= "A" && char <= "Z") || (char >= "a"  && char <= "z") || (char >= "0"  && char <= "9")
}