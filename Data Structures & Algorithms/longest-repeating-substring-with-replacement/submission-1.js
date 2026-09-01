class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Keeps track of the count for each letter
        const count = new Map();
        // This will always be maximized as this is what we're returning
        let result = 0;

        let left = 0;

        // This is the maxFrequency of the letters including after replacing
        // The letters will be changed each time
        let maxFrequency = 0;

        // Create the window
        for (let right = 0; right < s.length; right++) {
            const letter = s[right];

            // This will set the letter to either 0 if it doesn't exist or +1 if it does
            count.set(letter, (count.get(letter) || 0) + 1);

            // Set maxFrequency to the current maxFrequency or to the frequency of the letter that exists
            maxFrequency = Math.max(maxFrequency, count.get(letter));

            // While window length minus the most frequent character in the window is less than k, remove s[left] from window and decrement it in map then move left forward to shrink window
            while (right - left + 1 - maxFrequency > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
