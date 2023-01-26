import {
  fibonacci,
  fibonacciRecursive,
  fibonacciRecursiveMemoized,
} from "./fibonacci.ts";

const FIB_NUMBER = 25;

Deno.bench("fibonacci", { group: "fibonacci", baseline: true }, () => {
  fibonacci(FIB_NUMBER);
});

Deno.bench(
  "fibonacciRecursiveMemoized",
  { group: "fibonacci" },
  () => {
    fibonacciRecursiveMemoized(FIB_NUMBER);
  },
);

Deno.bench(
  "fibonacciRecursive",
  { group: "fibonacci" },
  () => {
    fibonacciRecursive(FIB_NUMBER);
  },
);
