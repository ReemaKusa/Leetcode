/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let rob1 = 0, rob2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let newRob = Math.max(rob2, rob1 + nums[i]);
        rob1 = rob2;
        rob2 = newRob;
    }
    return rob2;
};