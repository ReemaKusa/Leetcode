/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;
    let rows = Array(Math.min(numRows, s.length)).fill('');
    
    let currentRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[currentRow] += c;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join('');
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));