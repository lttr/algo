// https://leetcode.com/problems/roman-to-integer/

const values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const minusValues: Record<string, number> = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

function getValue(roman: string) {
  if (roman.length === 1) {
    return values[roman];
  } else if (roman.length === 2) {
    return minusValues[roman];
  }
  throw new Error("tokens must be 1 or 2 characters long");
}

function compute(tokens: string[]) {
  let result = 0;
  for (const token of tokens) {
    result += getValue(token);
  }
  return result;
}

export function romanToInt(inputString: string) {
  if (!inputString) {
    return 0;
  }

  if (inputString.length === 1) {
    return getValue(inputString);
  }

  const input = inputString.split("");
  const buffer = [inputString[0]];

  for (let index = 1; index < input.length; index++) {
    const lastTwo = buffer[index - 1] + input[index];
    if (Object.keys(minusValues).includes(lastTwo)) {
      buffer[index - 1] = "";
      buffer.push(lastTwo);
    } else {
      buffer.push(input[index]);
    }
  }

  return compute(buffer.filter(Boolean));
}

if (import.meta.main) {
  console.log(romanToInt("MCMXCIV"));
}
