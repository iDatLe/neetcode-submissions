class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left += 1;
            }

            set.add(s[right]);

            maxLength = Math.max(maxLength, set.size)
        }

        return maxLength;
    }
}
