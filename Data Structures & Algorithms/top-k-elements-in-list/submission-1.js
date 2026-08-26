class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const hash = {};

    // Loop through. If in hash, add 1. If not, set 1
    for (const num of nums) {
      hash[num] = (hash[num] || 0) + 1;
    }

    // Turn hash object into array. Then destructured and set to new array
    const arr = Object.entries(hash).map(([num, freq]) => [freq, parseInt(num)]);

    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map(pair => pair[1])
  }
}
