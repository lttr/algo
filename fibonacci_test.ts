import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import {
  fibonacci,
  fibonacciRecursive,
  fibonacciRecursiveMemoized,
} from "./fibonacci.ts";

Deno.test(function test1() {
  assertEquals(fibonacci(1), 1);
});

Deno.test(function test2() {
  assertEquals(fibonacci(6), 8);
});

Deno.test(function test3() {
  assertEquals(fibonacci(20), 6765);
});

Deno.test(function test1() {
  assertEquals(fibonacciRecursive(1), 1);
});

Deno.test(function test2() {
  assertEquals(fibonacciRecursive(6), 8);
});

Deno.test(function test3() {
  assertEquals(fibonacciRecursive(20), 6765);
});

Deno.test(function test1() {
  assertEquals(fibonacciRecursiveMemoized(1), 1);
});

Deno.test(function test2() {
  assertEquals(fibonacciRecursiveMemoized(6), 8);
});

Deno.test(function test3() {
  assertEquals(fibonacciRecursiveMemoized(20), 6765);
});
