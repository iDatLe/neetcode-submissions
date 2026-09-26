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
            const middle = Math.floor((left + right) / 2);

            let totalTime = 0;

            for (const p of piles) {
                // Iterate through piles and add up every pile divided by middle
                // p divided by middle is the number of hours to eat that pile
                totalTime += Math.ceil(p / middle);
            }

            if (totalTime <= h) {
                // Move rightt most inwards
                result = middle;
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        return result;
    }
}
