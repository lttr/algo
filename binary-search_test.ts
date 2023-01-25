import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import {
  binarySearch,
  binarySearchLinear,
  binarySearchRecursiveComplicated,
} from "./binary-search.ts";

Deno.test(function test1() {
  assertEquals(binarySearch([-1, 0, 3, 5, 9, 12], 12), 5);
});

Deno.test(function test2() {
  assertEquals(binarySearch([0], 12), -1);
});

Deno.test(function test3() {
  assertEquals(binarySearch([-2, -1], -2), 0);
});

Deno.test(function testRecursiveComplicated() {
  assertEquals(binarySearchRecursiveComplicated([-1, 0, 3, 5, 9, 12], 12), 5);
});

Deno.test(function testLinear() {
  assertEquals(binarySearchLinear([-1, 0, 3, 5, 9, 12], 12), 5);
});
