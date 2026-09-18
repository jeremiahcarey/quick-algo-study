# Hints

Use this ladder only when you are stuck: read Hint 1, then go back and try again. Escalate to the next hint only if you still cannot make progress.

### 01. Kth Largest Element In An Array

- **Hint 1 — nudge**: If the array were ordered from largest to smallest, which position would answer the question, and how much of that ordering do you really need?
- **Hint 2 — technique**: A simple baseline is to sort descending and read index `k - 1`, which costs `O(n log n)` time and `O(1)` to `O(n)` extra space depending on whether you mutate or copy. The upgrade is a size-`k` min-heap that keeps the current `k` largest values, targeting `O(n log k)` time and `O(k)` space.
- **Hint 3 — approach outline**:
  1. Start with the sort baseline if you want the shortest correct version: order the numbers from largest to smallest and return the value at rank `k`.
  2. For the heap version, create a min-heap whose top is the smallest value among the kept candidates.
  3. Scan each number and push it into the heap.
  4. Whenever the heap grows beyond `k`, pop once so only `k` candidates remain.
  5. After all numbers are processed, the heap top is the requested value.
