/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    let first = 1;
    let second = 1; 1
    for (let i = 2; i <= n; i++) {
        let current = first + second; 
        first = second; 
        second = current;
    }

    return second;
};