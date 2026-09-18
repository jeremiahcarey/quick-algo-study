# Hints

Use this as a spoiler ladder: read Hint 1, go back and try again. Only move to the next hint if you are still stuck.

### 01. Valid Parentheses

- **Hint 1 — nudge**: When you see a closing bracket, which earlier opening bracket is it required to agree with?
- **Hint 2 — technique**: Use a stack of opening brackets with a bracket-pair lookup. Target `O(n)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Scan the string from left to right.
  2. Save opening brackets as they appear.
  3. For each closing bracket, compare it with the most recent saved opener.
  4. Reject mismatches or missing openers.
  5. At the end, accept only if no openers remain.

### 02. Daily Temperatures

- **Hint 1 — nudge**: When today's temperature arrives, which earlier days can it finally answer?
- **Hint 2 — technique**: Use a monotonic decreasing stack of unresolved indexes. Target `O(n)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Create an output array filled with `0`.
  2. Scan temperatures from left to right by index.
  3. While the current temperature is warmer than the temperature at the latest unresolved index, resolve that older index with the day difference.
  4. Add the current index as unresolved.
  5. Leave indexes with no later warmer day as `0`.

### 03. Binary Search

- **Hint 1 — nudge**: After checking the middle value, can you prove one side cannot contain the target?
- **Hint 2 — technique**: Use classic binary search with two inclusive bounds. Target `O(log n)` time and `O(1)` space.
- **Hint 3 — approach outline**:
  1. Start with bounds at the first and last indexes.
  2. While the bounds overlap, inspect the middle index.
  3. Return the middle index if it holds the target.
  4. If the middle value is too small, move the left bound past it.
  5. If the middle value is too large, move the right bound before it.
  6. If the loop ends, report that the target was not found.

### 04. Search In Rotated Sorted Array

- **Hint 1 — nudge**: Even after rotation, can you identify a half of the current range that is still ordered?
- **Hint 2 — technique**: Use modified binary search that checks which half is sorted before discarding a half. Target `O(log n)` time and `O(1)` space.
- **Hint 3 — approach outline**:
  1. Start with bounds at the first and last indexes.
  2. Check the middle value for the target.
  3. Decide whether the left half or right half is currently sorted.
  4. If the target's value range fits inside the sorted half, keep that half.
  5. Otherwise, discard that half and keep the other one.
  6. Continue until found or until the bounds no longer overlap.

### 05. Koko Eating Bananas

- **Hint 1 — nudge**: If one eating speed finishes in time, what must be true about every faster speed?
- **Hint 2 — technique**: Use binary search on the answer with a feasibility check over all piles. Target `O(n log m)` time, where `m` is the largest pile, and `O(1)` space.
- **Hint 3 — approach outline**:
  1. Search possible speeds from `1` through the largest pile size.
  2. For a trial speed, compute the total hours needed across all piles.
  3. Count each pile as whole hours, rounding up partial hours.
  4. If the trial speed finishes within `h`, keep it as a possible answer and try smaller speeds.
  5. If it does not finish within `h`, try larger speeds.
  6. Return the smallest speed that passes the time limit.
