// Codility sample test
//
// Write a function:
//
//     function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
//         N is an integer within the range [1..100,000];
//         each element of array A is an integer within the range [−1,000,000..1,000,000].

// A slow solution
export function solution(A: number[]): number {
  A.sort()
  for (let i = 1; i < A.length; i++) {;
    if (i === A.length - 1 && A[i - 1] === A[i] - 1) {
      return A[i] + 1
    }
    if (A[i] === A[i - 1]) continue
    if (A[i] === A[i - 1] + 1) continue
    if (A[i] < 0) continue
    const result = A[i - 1] + 1
    return result
  }
  return 1
}
