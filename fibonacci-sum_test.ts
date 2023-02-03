import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts"
import { sumOddNumbersInFib } from "./fibonacci-sum.ts"

Deno.test(function test() {
  assertEquals(sumOddNumbersInFib(), 14328)
})
