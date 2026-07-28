class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = {};

        // Iterate through each word
        for (const s of strs) {

            // Each SORTED word is a key in the hashmap
            const key = s.split('').sort().join('');

            // If the map does NOT have the key / word then set as empty array to initialize
            if (!hashmap[key]) hashmap[key] = [];
            hashmap[key].push(s);
        }
        return Object.values(hashmap)
    }
}
