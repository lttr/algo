// gun.io
// Palindromes
//
// A palindrome is a word, number, phrase, or another sequence of characters which
// reads the same backward as forward, such as madam, racecar, or the number
// 10801.
//
// What is the sum of all numeric palindromes that are less than 10,000?

export function isPalindrome(input: number | string) {
  const string = input.toString()
  let left = 0
  let right = string.length - 1
  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

function sumOfPalindromes() {
  const max = 10_000
  const numbers = Array.from(Array(max), (_, i) => i + 1)
  let sum = 0
  for (const number of numbers) {
    if (isPalindrome(number)) {
      sum += number
    }
  }
  return sum
}

if (import.meta.main) {
  console.log(sumOfPalindromes()) // 545040
}
