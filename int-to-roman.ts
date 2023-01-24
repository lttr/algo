// https://leetcode.com/problems/integer-to-roman/

// gun.io
// Legionnaries
//
// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
// occurs 6 times.
//
// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
// Roman numerals, how many times does the numeral “X” occur?

const intToRomanMap = new Map<number, string>([
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
]);

export function intToRoman(n: number): string {
  const result: string[] = [];
  function partToRoman(integer: number) {
    if (intToRomanMap.has(integer)) {
      result.push(intToRomanMap.get(integer)!);
      return;
    }
    const number = integer;
    const intToMapReversed = [...intToRomanMap.entries()].reverse();
    for (const [key, value] of intToMapReversed) {
      if (number - key > 0) {
        result.push(value);
        partToRoman(number - key);
        break;
      }
    }
  }
  partToRoman(n);
  return result.join("");
}

function process(max: number) {
  const numbers = Array.from(Array(max), (_, i) => i + 1);
  let sum = 0;
  for (const number of numbers) {
    const r = intToRoman(number);
    sum += (r.match(/X/g) || []).length;
  }
  return sum;
}

if (import.meta.main) {
  console.log(process(2660));
}
