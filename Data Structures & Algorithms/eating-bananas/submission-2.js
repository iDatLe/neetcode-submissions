class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // 1 is the far left
        let left = 1;

        // We are getting the biggest number in the array to set as right
        let right = Math.max(...piles);
        let result = right;

        while (left <= right) {
            // k is the middle of left and right
            const k = Math.floor((left + right) / 2);

            let totalTime = 0;

            for (const p of piles) {
                // Iterate through piles and add up every pile divided by middle
                totalTime += Math.ceil(p / k);
            }

            if (totalTime <= h) {
                // Move rightt most inwards
                result = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return result;
    }
}
