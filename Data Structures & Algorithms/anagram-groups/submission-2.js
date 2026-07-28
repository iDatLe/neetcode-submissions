class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = {};

        for (const s of strs) {
            const sorted = s.split('').sort().join('');

            if (!hashmap[sorted]) hashmap[sorted] = [];
            hashmap[sorted].push(s);
        }

        return Object.values(hashmap)
    }
}
