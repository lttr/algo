import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts"
import { romanToInt } from "./roman-to-int.ts"

Deno.test(function test1() {
  assertEquals(romanToInt("V"), 5)
})

Deno.test(function test2() {
  assertEquals(romanToInt("LVIII"), 58)
})

Deno.test(function test3() {
  assertEquals(romanToInt("MCMXCIV"), 1994)
})
