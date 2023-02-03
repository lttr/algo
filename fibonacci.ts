// Tabular solution
export function fibonacci(n: number): number {
  const ar = []
  ar[0] = 0
  ar[1] = 1
  for (let i = 2; i <= n; i++) {
    ar[i] = ar[i - 2] + ar[i - 1]
  }
  return ar[n]
}

export function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

export function fibonacciRecursiveMemoized(n: number): number {
  const cache = new Map()
  function memo(fn: (n: number) => number, arg: number) {
    if (cache.has(arg)) {
      return cache.get(arg)
    }
    const result = fn(arg)
    cache.set(arg, result)
    return result
  }

  function fib(n: number): number {
    if (n < 2) {
      return n
    }
    return memo(fib, n - 1) + memo(fib, n - 2)
  }

  return fib(n)
}
