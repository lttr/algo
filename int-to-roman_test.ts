import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { intToRoman } from "./int-to-roman.ts";

Deno.test(function test1() {
  assertEquals(intToRoman(5), "V");
});

Deno.test(function test2() {
  assertEquals(intToRoman(58), "LVIII");
});

Deno.test(function test3() {
  assertEquals(intToRoman(1994), "MCMXCIV");
});
