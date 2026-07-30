class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
        const rows = matrix.length;
        const cols = matrix[0].length;

        // 1. Initialize pointers for the virtual 1D array
        let left = 0;
        let right = (rows * cols) - 1;

        // 2. Standard binary loop
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            
            // 3. Convert virtual 1D index to 2D coordinates
            let row = Math.floor(middle / cols);
            let col = middle % cols;
            let midValue = matrix[row][col];

             // 4. Evaluate the value
            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = middle + 1; // Search the right half
            } else {
                right = middle - 1; // Search the left half
            }
        }
        return false;
    }
}
