class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // Last valid element in arrays
        let i = m - 1;
        let j = n - 1;

        // Pointer to last position of nums1
        let last = m + n - 1

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[last] = nums1[i];
                i--
            } else {
                nums1[last] = nums2[j];
                j--
            }
            last--;
          
        }
    }
}

/**
 * m is number of valid elements in nums1[]
 * n is number of valid elements in nums2[]
 * nums1 length is m + n with first m elements values to be merged
 * last n elements set to 0 as placeholders
 * 
 * merge two arrays so it's sorted in non-decreasing order and stored all in nums1
 */