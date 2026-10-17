class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let column = row + 1; column < matrix[row].length; column++) {
                [matrix[row][column], matrix[column][row]] = [
                    matrix[column][row],
                    matrix[row][column],
                ];
            }

            matrix[row].reverse();
        }

        return matrix;
    }
}
