import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { searchInsertPosition } from "./search-insert-position.ts";

Deno.test(function test1() {
  assertEquals(searchInsertPosition([1, 3, 5, 6], 5), 2);
});

Deno.test(function test2() {
  assertEquals(searchInsertPosition([1, 3, 5, 6], 2), 1);
});

Deno.test(function test2() {
  assertEquals(searchInsertPosition([1, 3, 5, 6], 7), 4);
});
