class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = new Map();
        for(let i=0;i<nums.length;i++) {
            if(obj.has(nums[i])) {
                let value = obj.get(nums[i]);
                return value<=i ? [value, i]:[i, value];
            }
            let diff = target - nums[i];
            obj.set(diff, i);
        }
        return null;
    }
}
