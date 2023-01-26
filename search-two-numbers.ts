// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
//
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
//
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
//
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
//
// Your solution must use only constant extra space.

export function searchTwoNumbers(
  array: number[],
  target: number,
): [number, number] {
  // naive n**2 solution
  // for (let i = 0; i < array.length - 1; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     const sum = array[i] + array[j];
  //     if (sum === target) {
  //       return [i + 1, j + 1];
  //     }
  //   }
  // }

  let left = 0;
  let right = array.length - 1;
  while (true) {
    const sum = array[left] + array[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      break;
    }
  }

  return [left + 1, right + 1];
}

console.log(searchTwoNumbers([2, 7, 11, 15], 9));
console.log(searchTwoNumbers([2, 3, 4], 6));
console.log(searchTwoNumbers([-1, 0], -1));
console.log(searchTwoNumbers([0, 0], 0));
console.log(searchTwoNumbers([2, 7, 11, 15], 18));
console.log(searchTwoNumbers([2, 7, 11, 15], 26));
