class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (let word of strs) {
            const arr = new Array(26).fill(0);

            for (let i = 0; i < word.length; i++) {
                const normalizedLetter = word[i].charCodeAt(0) - 97;

                if (!arr[normalizedLetter]) {
                    arr[normalizedLetter] = 1;
                } else {
                    arr[normalizedLetter] += 1;
                }
            }

            const hashKey = arr.join(',');

            if (!hashMap.has(hashKey)) {
                hashMap.set(hashKey, [word]);
            } else {
                const hashValue = hashMap.get(hashKey);
                hashValue.push(word);
            }
        }

        return [...hashMap.values()];
    }
}
