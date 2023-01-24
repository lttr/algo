import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { isPalindrome } from "./palindrome.ts";

Deno.test(function test1() {
  assertEquals(isPalindrome("V"), true);
});

Deno.test(function test2() {
  assertEquals(isPalindrome("LVIII"), false);
});

Deno.test(function test3() {
  assertEquals(isPalindrome(1991), true);
});

Deno.test(function test4() {
  assertEquals(isPalindrome(""), true);
});

Deno.test(function test5() {
  assertEquals(isPalindrome(0), true);
});

Deno.test(function test6() {
  assertEquals(isPalindrome("PALAP"), true);
});
