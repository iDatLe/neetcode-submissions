class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord) || beginWord === endWord) return 0;

        const n = wordList.length;
        const m = wordList[0].length;
        // Create an array with length of word list
        const adjacent = Array.from({ length: n }, () => []);
        const map = new Map();

        for (let i = 0; i < n; i++) {
            // Store each word and its index
            map.set(wordList[i], i);
        }

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let count = 0;
                for (let k = 0; k < m; k++) {
                    if (wordList[i][k] !== wordList[j][k]) {
                        count++;
                    }
                }
                if (count === 1) {
                    adjacent[i].push(j);
                    adjacent[j].push(i);
                }
            }
        }

        const queue = new Queue();
        let result = 1;
        const visit = new Set();

        for (let i = 0; i < m; i++) {
            for (let c = 97; c < 123; c++) {
                if (String.fromCharCode(c) === beginWord[i]) {
                    continue;
                }
                const word =
                    beginWord.slice(0, i) + String.fromCharCode(c) + beginWord.slice(i + 1);

                if (map.has(word) && !visit.has(map.get(word))) {
                    queue.push(map.get(word));
                    visit.add(map.get(word));
                }
            }
        }
        while (!queue.isEmpty()) {
            result++;
            let size = queue.size();
            for (let i = 0; i < size; i++) {
                let node = queue.pop();
                if (wordList[node] === endWord) {
                    return result;
                }

                for (let nei of adjacent[node]) {
                    if (!visit.has(nei)) {
                        visit.add(nei);
                        queue.push(nei)
                    }
                }
            }
        }

        return 0;
    }
}
