class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                console.log('equal!')
                return [left + 1, right + 1];
            } else if (sum < target) {
                left += 1;
            } else if (sum > target) {
                right -= 1;
            }
        }
    }
}
