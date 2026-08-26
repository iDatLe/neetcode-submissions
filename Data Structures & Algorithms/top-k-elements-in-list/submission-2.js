class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const hash = {};

    for (let num of nums) {
      hash[num] = (hash[num] || 0) + 1;
    }

    const mappedHash = Object.entries(hash).map(([num, freq]) => [freq, parseInt(num)]);

    const sort = mappedHash.sort((a, b) => b[0] - a[0]);

    return sort.slice(0, k).map(pair => pair[1]);
  }
}
