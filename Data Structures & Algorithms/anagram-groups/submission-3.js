class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map();

        for (let str of strs) {
            const arr = new Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                const normalizedLetterCode = str[i].charCodeAt(0) - 97;

                if (!arr[normalizedLetterCode]) {
                    arr[normalizedLetterCode] = 1;
                } else {
                    arr[normalizedLetterCode] += 1;
                }
            }
            const key = arr.join(',')

            if (!hash.has(key)) {
                hash.set(key, [str])
            } else {
                const hashArr = hash.get(key);
                hashArr.push(str)
            }
        }

        return [...hash.values()]
    }
}
