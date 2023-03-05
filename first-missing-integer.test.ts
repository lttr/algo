import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts"
import { solution } from "./first-missing-integer.ts"

Deno.test(function test1() {
  assertEquals(solution([1, 3, 6, 4, 1, 2]), 5)
})

Deno.test(function test2() {
  assertEquals(solution([1, 2, 3]), 4)
})

Deno.test(function test3() {
  assertEquals(solution([-1, -3]), 1)
})
