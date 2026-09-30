class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestStreak = 0;
        const newSet = new Set(nums);

        for (let num of nums) {

            if (!newSet.has(num - 1)) {
                let currentNumber = num;
                let currentStreak = 1;

                while (newSet.has(currentNumber + 1)) {
                    currentNumber += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak)
            }
        }
        return longestStreak;
    }
}

















// let longestStreak = 0;
//         const uniqueSet = new Set(nums);

//         for (let num of uniqueSet) {
//             // If it IS a starter because set does not have the num - 1
//             if (!uniqueSet.has(num - 1)) {
//                 let currNum = num;
//                 let currStreak = 1;

//                 // Continue to loop through set to see if it has a "+1"
//                 while (uniqueSet.has(currNum + 1)) {
//                     currNum += 1;
//                     currStreak += 1;
//                 }
//                 longestStreak = Math.max(longestStreak, currStreak);
//             }
//         }

//         return longestStreak;