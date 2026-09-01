class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right])) {
                left = Math.max(map.get(s[right]) + 1, left);
            }
            map.set(s[right], right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
