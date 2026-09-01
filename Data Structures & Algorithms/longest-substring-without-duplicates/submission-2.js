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
            const letter = s[right]

            if (map.has(letter)) {
                left = Math.max(map.get(letter) + 1, left);
            }
            map.set(letter, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
