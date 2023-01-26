import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { searchTwoNumbers } from "./search-two-numbers.ts";

Deno.test(function test1() {
  assertEquals(searchTwoNumbers([2, 7, 11, 15], 9), [1, 2]);
});

Deno.test(function test2() {
  assertEquals(searchTwoNumbers([2, 3, 4], 6), [1, 3]);
});

Deno.test(function test2() {
  assertEquals(searchTwoNumbers([-1, 0], -1), [1, 2]);
});
