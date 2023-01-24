// Gun.io
//
//  Fibonacci
//
// The Fibonacci sequence begins like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// (each number is the sum of the previous two)
//
// What is the sum of all odd numbers in the Fibonacci sequence that are less
// than 10,000?

function fib(n: number): number {
  const store: Record<number, number> = {};
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  let n1;
  let n2;
  if (store[n - 1]) {
    n1 = store[n - 1];
  } else {
    n1 = fib(n - 1);
    store[n - 1] = n1;
  }
  if (store[n - 2]) {
    n2 = store[n - 2];
  } else {
    n2 = fib(n - 2);
    store[n - 2] = n2;
  }
  return n1 + n2;
}

function fibSequence(max: number) {
  const sequence = [];
  let i = 1;
  while (true) {
    const result = fib(i);
    if (result >= max) {
      break;
    }
    sequence.push(result);
    i++;
  }
  return sequence;
}

export function sumOddNumbersInFib() {
  const sequence = fibSequence(10000);
  let result = 0;
  for (const number of sequence) {
    if (number % 2 === 1) {
      result += number;
    }
  }
  return result;
}

if (import.meta.main) {
  console.log(sumOddNumbersInFib());
}
