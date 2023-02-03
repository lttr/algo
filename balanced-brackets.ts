// Turing.com - practice

// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced
// Explanation: all the brackets are well-formed
//
// Input: exp = “[(])”
// Output: Not Balanced
// Explanation: 1 and 4 brackets are not balanced because
// there is a closing ‘]’ before the closing ‘(‘

export function isBalanced(input: string) {
  const stack: string[] = []
  for (const char of input) {
    const last = stack.at(-1)
    if (last) {
      if (
        (char === "]" && last === "[") ||
        (char === ")" && last === "(") ||
        (char === "}" && last === "{")
      ) {
        stack.pop()
      } else {
        stack.push(char)
      }
    } else {
      stack.push(char)
    }
    if (import.meta.main) {
      console.log(stack)
    }
  }
  return stack.length === 0
}

if (import.meta.main) {
  isBalanced("(((){}))")
}
