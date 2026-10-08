class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (-nums[i] === nums[left] + nums[right]) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
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
