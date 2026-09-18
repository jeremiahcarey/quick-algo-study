# Bonus Gap-Fillers Hints

Use these as a spoiler ladder: read Hint 1, go back and try again, and only escalate if you are still stuck. Hint 3 gives the plan, but still avoids full code.

### 01. Rotate Image

- **Hint 1 — nudge**: If a value starts at `(row, col)`, where should it land after a clockwise turn?
- **Hint 2 — technique**: Use transpose plus reverse each row for `O(n^2)` time and `O(1)` extra space.
- **Hint 3 — approach outline**:
  1. Swap values across the main diagonal so rows become columns.
  2. Reverse each row in place.
  3. Return nothing; the caller should observe the mutated matrix.

### 02. Flatten Deeply Nested Array

- **Hint 1 — nudge**: For each element, how can you decide whether it should stay as one item or contribute its contents?
- **Hint 2 — technique**: Use depth-limited recursive traversal for `O(m)` time, where `m` is visited values and arrays, with `O(d)` auxiliary stack space plus output.
- **Hint 3 — approach outline**:
  1. Write a helper that receives the current array and current depth.
  2. Scan each item from left to right.
  3. If the item is an array and the current depth is still below `n`, append the helper's returned contents.
  4. Otherwise append the item itself.
  5. Start the helper at depth `0`.

### 03. Product Of Array Except Self

- **Hint 1 — nudge**: What does each index need from everything before it and everything after it?
- **Hint 2 — technique**: Use two prefix/suffix product passes in the output array for `O(n)` time and `O(1)` extra space besides the answer.
- **Hint 3 — approach outline**:
  1. Create an answer array initialized with `1`.
  2. Sweep left to right, storing the product of values before the current index.
  3. Sweep right to left with a running product of values after the current index.
  4. Multiply that running right-side value into the answer at each index.
  5. Return the answer array.

### 04. Merge Intervals

- **Hint 1 — nudge**: What ordering would make it possible to compare only the newest range against one previous range?
- **Hint 2 — technique**: Sort by start time, then scan once for `O(n log n)` time and `O(n)` output space.
- **Hint 3 — approach outline**:
  1. Sort intervals by their start value.
  2. Keep a result list of non-overlapping ranges built so far.
  3. For each interval, compare it with the last range in the result.
  4. If it starts after the last range ends, append it as a new range.
  5. Otherwise extend the last range's end if needed.

### 05. Subsets

- **Hint 1 — nudge**: For each number, what are the two choices a subset can make about it?
- **Hint 2 — technique**: Use include/exclude backtracking for `O(n * 2^n)` time and `O(n)` auxiliary recursion space plus output.
- **Hint 3 — approach outline**:
  1. Keep a temporary `path` for the subset currently being built.
  2. At each index, first explore the branch that skips the number.
  3. Then add the number, explore the branch that includes it, and remove it afterward.
  4. When the index reaches the end, copy `path` into the results.
  5. Return all collected copies.
