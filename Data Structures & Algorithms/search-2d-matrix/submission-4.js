class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = (rows * cols) - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            let row = Math.floor(middle / cols);
            let col = middle % cols;
            let midValue = matrix[row][col];

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
