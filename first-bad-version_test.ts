import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts"
import { firstBadVersion } from "./first-bad-version.ts"

Deno.test(function test() {
  assertEquals(firstBadVersion((v) => (v >= 4 ? true : false))(5), 4)
})

Deno.test(function test() {
  assertEquals(firstBadVersion((v) => (v >= 100 ? true : false))(200), 100)
})
