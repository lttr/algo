import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts"
import { isBalanced } from "./balanced-brackets.ts"

Deno.test(function test1() {
  assertEquals(isBalanced("()"), true)
})

Deno.test(function test2() {
  assertEquals(isBalanced("({[]})"), true)
})

Deno.test(function test3() {
  assertEquals(isBalanced("({][})"), false)
})

Deno.test(function test4() {
  assertEquals(isBalanced("{(})"), false)
})
