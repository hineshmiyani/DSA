/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let trapWater = 0;

    let leftMax = 0;
    let rightMax = 0;

    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        
        if (height[leftPointer] < height[rightPointer]) {

            if (height[leftPointer] > leftMax) {
                leftMax = height[leftPointer];
            } else {
                trapWater = trapWater + leftMax - height[leftPointer];
            }

            leftPointer = leftPointer + 1;

        } else {
            
            if (height[rightPointer] > rightMax) {
                rightMax = height[rightPointer];
            } else {
                trapWater = trapWater + rightMax - height[rightPointer];
            }

            rightPointer = rightPointer - 1;
        }

    }

    return trapWater;
};