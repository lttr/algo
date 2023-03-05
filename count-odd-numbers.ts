export function countOdds(low: number, high: number): number {
  const diff = high - low;
  if (diff === 0) {
    return high % 2 === 1 ? 1 : 0;
  }
  if (high % 2 === 1 || low % 2 === 1) {
    return Math.floor(diff / 2) + 1;
  } else {
    return Math.floor(diff / 2);
  }
}
