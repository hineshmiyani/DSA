/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maxArea = 0;


    let i = 0;
    let j = height.length - 1;

    while (i  < j) {

        currentArea = (j - i) * Math.min(height[i], height[j]);
        maxArea = Math.max(maxArea, currentArea);            


        if (height[i] <= height[j]) {
            i = i + 1;
        } else {
            j = j - 1;
        }

    }
    
  
    return maxArea;
};