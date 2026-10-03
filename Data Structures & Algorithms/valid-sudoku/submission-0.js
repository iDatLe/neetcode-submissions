class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // Use new Set to check for uniqueness in rows and in columns
    //
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (val === ".") continue;

                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
