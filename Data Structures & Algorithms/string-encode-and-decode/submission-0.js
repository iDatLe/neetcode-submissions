class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            const strLength = str.length;
            result += strLength + "#" + str;
        }
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf("#", i);
            let length = parseInt(str.slice(i, j));

            let start = j + 1;
            let end = start + length;

            res.push(str.slice(start, end));

            i = end;
        }
        return res;
    }
}
