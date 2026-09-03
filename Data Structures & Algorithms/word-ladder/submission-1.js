class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // Edge case: if endWord isn't in the list, we can never reach it
        if (!wordList.includes(endWord)) {
            return 0;
        }

        // Build a "pattern map": pattern -> [words that match that pattern]
        // Example: for "cat", patterns are "*at", "c*t", "ca*"
        // The * acts as a wildcard for any single character
        const nei = {};  // this will hold pattern -> neighbors list
        
        // Add beginWord to wordList so it's also in the pattern map
        wordList.push(beginWord);
        
        // For EVERY word (including beginWord), generate all its patterns
        for (const word of wordList) {
            for (let j = 0; j < word.length; ++j) {
                // Create a pattern by replacing char at position j with '*'
                // Example: "cat" at j=0 gives "*at"
                const pattern = 
                    word.substring(0, j) + '*' + word.substring(j + 1);
                
                // Add this word to the list for this pattern
                if (!nei[pattern]) {
                    nei[pattern] = [];  // initialize if new pattern
                }
                nei[pattern].push(word);
            }
        }

        // BFS setup
        const visit = new Set([beginWord]);  // track visited words
        const q = [beginWord];               // queue for BFS
        let res = 1;                         // count of words in path (includes beginWord)
        
        // BFS loop: explore level by level
        while (q.length > 0) {
            const size = q.length;   // number of words at current level
            
            // Process all words at current level
            for (let i = 0; i < size; ++i) {
                const word = q.shift();  // get next word from queue
                
                // If we reached endWord, return count so far
                if (word === endWord) {
                    return res;
                }
                
                // For each position in current word, find all patterns it matches
                for (let j = 0; j < word.length; ++j) {
                    // Generate the pattern for position j
                    // (same pattern generation as when building the map)
                    const pattern =
                        word.substring(0, j) + '*' + word.substring(j + 1);
                    
                    // All words matching this pattern are potential next steps
                    // (they differ from current word at exactly position j)
                    for (const neiWord of nei[pattern]) {
                        if (!visit.has(neiWord)) {
                            visit.add(neiWord);   // mark as visited
                            q.push(neiWord);      // add to next level
                        }
                    }
                }
            }
            // Finished processing all words at current level
            res++;  // increment for next level of words
        }
        
        return 0;  // BFS exhausted without finding endWord
    }
}