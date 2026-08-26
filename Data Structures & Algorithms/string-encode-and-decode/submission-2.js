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
    decode(s) {
    const res = [];
    let i = 0;

    while (i < s.length) {
        // 1. Find the next '#' starting from our current pointer position i
        let j = s.indexOf('#', i);
        
        // 2. The characters between i and j form the length of the string
        let length = parseInt(s.slice(i, j));
        
        // 3. The actual string starts right after the '#' (at j + 1)
        let start = j + 1;
        let end = start + length;
        
        // 4. Extract the exact word and push it to our results array
        res.push(s.slice(start, end));
        
        // 5. Move our pointer i to the start of the next encoded segment
        i = end;
    }

    return res;
}
}
