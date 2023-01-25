// https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an
// integer target, write a function to search target in nums. If target exists,
// then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

export function binarySearchRecursiveComplicated(
  nums: number[],
  target: number,
): number {
  function binary(left: number, right: number): number {
    let halfIndex = left + Math.floor((right - left) / 2);
    if (nums[halfIndex] === target) {
      return halfIndex;
    }
    if (right === left) {
      return -1;
    }
    if (nums[halfIndex] > target) {
      // go left
      halfIndex = left + Math.floor((right - left) / 2);
      return binary(left, halfIndex);
    } else {
      // go right
      halfIndex = left + Math.ceil((right - left) / 2);
      return binary(halfIndex, right);
    }
  }
  return binary(0, nums.length - 1);
}

export function binarySearchLinear(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

export function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

if (import.meta.main) {
  console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12));
}
