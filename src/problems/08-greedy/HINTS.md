# Greedy Hints

Read this as a ladder: read Hint 1, then go back and try again. Only move to the next hint if you are still stuck.

### 01. Maximum Units On A Truck

- **Hint 1 — nudge**: If every box uses exactly one unit of truck capacity, which box type is hardest to regret loading first?
- **Hint 2 — technique**: Use sort-then-consume greedy: sort by `unitsPerBox` descending, then fill the truck from that order. Target `O(n log n)` time and `O(1)` extra space if sorting in place.
- **Hint 3 — approach outline**:
  1. Order the box types so the most valuable boxes per slot are considered first.
  2. Keep a running `total` and the remaining truck capacity.
  3. For each box type, load as many boxes as possible without exceeding the remaining capacity.
  4. Add the loaded boxes' units to `total` and reduce the remaining capacity.
  5. Stop when the truck is full or no box types remain, then return `total`.

### 02. Jump Game

- **Hint 1 — nudge**: At each index, what single number would tell you whether this position is even usable?
- **Hint 2 — technique**: Use single-pass farthest-reach greedy: track the farthest index reachable so far. Target `O(n)` time and `O(1)` extra space.
- **Hint 3 — approach outline**:
  1. Start with `bestReach = 0`.
  2. Scan indexes from left to right.
  3. If the current index is greater than `bestReach`, the scan has reached a gap.
  4. Otherwise, update `bestReach` with the farther of its current value and `i + nums[i]`.
  5. If the scan finishes, or `bestReach` reaches the last index, the end is reachable.
