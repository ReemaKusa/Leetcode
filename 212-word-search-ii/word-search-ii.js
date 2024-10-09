/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}
var findWords = function(board, words) {
    
    let result = [];

    let root = new TrieNode();
    for (let word of words) {
        let node = root;
        for (let letter of word) {
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode();
            }
            node = node.children[letter];
        }
        node.word = word;
    }

    const dfs = (node, row, col) => {
        let letter = board[row][col];
        let currentNode = node.children[letter];

        if (currentNode && currentNode.word) {
            result.push(currentNode.word);
            currentNode.word = null; 
        }

        board[row][col] = '#';
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;
            if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length && board[newRow][newCol] !== '#') {
                if (currentNode && currentNode.children[board[newRow][newCol]]) {
                    dfs(currentNode, newRow, newCol);
                }
            }
        }

        board[row][col] = letter;
    };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (root.children[board[row][col]]) {
                dfs(root, row, col);
            }
        }
    }
    return result;
};