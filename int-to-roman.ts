// https://leetcode.com/problems/integer-to-roman/

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
