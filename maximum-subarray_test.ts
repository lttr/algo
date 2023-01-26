import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { maximumSubarray } from "./maximum-subarray.ts";

Deno.test(function test0() {
  assertEquals(maximumSubarray([0]), 0);
});

Deno.test(function test1() {
  assertEquals(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

Deno.test(function test2() {
  assertEquals(maximumSubarray([5, 4, -1, 7, 8]), 23);
});
