// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the
// index if the target is found. If not, return the index where it would be if
// it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

export function searchInsertPosition(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    if (left > right) {
      return left;
    }
    const mid = left + Math.floor((right - left) / 2);
    // console.log(`l: ${left}, r: ${right}, mid: ${mid}, num: ${nums[mid]}`);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      if (left === right) {
        return mid;
      }
      right = mid - 1;
    }
    if (nums[mid] < target) {
      if (left === right) {
        return mid + 1;
      }
      left = mid + 1;
    }
  }
}

if (import.meta.main) {
  console.log(searchInsertPosition([3, 5, 7, 9, 10], 8));
  console.log(searchInsertPosition([3, 5, 9, 10], 12));
  console.log(searchInsertPosition([1, 2], 0));
}
