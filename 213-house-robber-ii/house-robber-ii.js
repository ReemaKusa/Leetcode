/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    const robLinear = (houses) => {
        let rob1 = 0, rob2 = 0;
        for (let amount of houses) {
            let newRob = Math.max(rob2, rob1 + amount);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    };

    let case1 = robLinear(nums.slice(1));
    let case2 = robLinear(nums.slice(0, nums.length - 1));
    return Math.max(case1, case2);
};