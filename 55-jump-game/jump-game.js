/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) {
            return false;
        }
        farthest = Math.max(farthest, i + nums[i]);

        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    return false;
};

/* console.log(canJump([2,3,1,1,4])); */