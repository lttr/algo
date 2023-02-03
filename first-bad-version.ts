// https://leetcode.com/problems/first-bad-version/
//
// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check. Since
// each version is developed based on the previous version, all the versions after
// a bad version are also bad.
//
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first
// bad one, which causes all the following ones to be bad.
//
// You are given an API bool isBadVersion(version) which returns whether version is
// bad. Implement a function to find the first bad version. You should minimize the
// number of calls to the API.

export function firstBadVersion(isBadVersion: (v: number) => boolean) {
  function versionForIndex(x: number) {
    return x + 1
  }
  return function (n: number) {
    let left = 0
    let right = n
    let mid = 0
    while (left <= right) {
      mid = Math.floor(left + (right - left) / 2)
      if (
        isBadVersion(versionForIndex(mid)) &&
        !isBadVersion(versionForIndex(mid - 1))
      ) {
        break
      } else if (isBadVersion(versionForIndex(mid))) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return mid + 1
  }
}

if (import.meta.main) {
  console.log(firstBadVersion((v) => (v >= 4 ? true : false))(5))
}
