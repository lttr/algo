import {
  binarySearch,
  binarySearchLinear,
  binarySearchRecursiveComplicated,
} from "./binary-search.ts";

const array = Array.from(Array(1000), (_, i) => i * 2 - 500);

Deno.bench("binarySearch", { group: "binarySearch", baseline: true }, () => {
  binarySearch(array, 12);
});

Deno.bench(
  "binarySearchRecursiveComplicated",
  { group: "binarySearch" },
  () => {
    binarySearchRecursiveComplicated(array, 12);
  },
);

Deno.bench(
  "binarySearchLinear",
  { group: "binarySearch" },
  () => {
    binarySearchLinear(array, 12);
  },
);
