class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let left = 0;
        let right = (rows * cols) - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            const row = Math.floor(middle / cols);
            const col = middle % cols;
            const midValue = matrix[row][col];

            if (target > midValue) {
                left = middle + 1;
            } else if (target < midValue) {
                right = middle - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
