class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1

        for (let i = arr.length - 1; i >= 0; i--) {
            const currentValue = arr[i]
            const max = Math.max(rightMax, currentValue);
            arr[i] = rightMax;
            rightMax = max;
        }

        return arr;
    }
}
