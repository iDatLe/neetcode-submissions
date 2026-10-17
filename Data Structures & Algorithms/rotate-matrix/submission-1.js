class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length; //cause it's n x number

        for (let row = 0; row < n; row++) {
            for (let column = row + 1; column < n; column++) {
                [matrix[row][column], matrix[column][row]] = [
                    matrix[column][row],
                    matrix[row][column],
                ];
            }
        }

        for (let row of matrix) {
            row.reverse();
        }

        return matrix;
    }
}
