class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            // Skips the value if it's the same as the previous i in order to avoid duplicates
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (-nums[i] === nums[left] + nums[right]) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // after finding a valid triplet, keeps moving left past any copies of the value it just used. Same as above comment, but for inner loop
                    while (left < right && nums[left] === nums[left - 1]) left += 1;
                } else if (-nums[i] < nums[left] + nums[right]) {
                    right -= 1;
                } else if (-nums[i] > nums[left] + nums[right]) {
                    left += 1;
                }
            }
        }
        return result;
    }
}
