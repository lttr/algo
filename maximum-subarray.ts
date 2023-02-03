// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the subarray with the largest sum, and
// return its sum.

export function maximumSubarray(nums: number[]): number {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    max = Math.max(max, nums[i])
  }
  return max
}
