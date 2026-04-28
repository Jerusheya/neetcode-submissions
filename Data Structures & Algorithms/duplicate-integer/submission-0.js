class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let noduplicate = new Set(nums);
        if (noduplicate.size != nums.length) {
            return true;
        }
        return false;
    }
}
