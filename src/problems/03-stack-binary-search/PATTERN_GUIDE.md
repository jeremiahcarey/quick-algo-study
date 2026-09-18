# Stack And Binary Search Pattern Guide

## Stacks

### What It Is

A stack keeps track of items in last-in, first-out order. The core idea is to keep the most recent unresolved item easy to inspect, match, or remove.

This pattern fits problems where new input can settle something that came immediately before it, or where each item waits until a future item proves it can be resolved.

### How To Spot It

Phrasing tells:

- Matching, nesting, balanced delimiters, or "most recent unmatched" language.
- "Next greater," "next warmer," "previous smaller," or nearest item to one side.
- A sequence where earlier items remain pending until a later item answers them.
- Undo/backtracking behavior where the latest decision is the first one reconsidered.

Constraint tells:

- One pass over an array or string is expected.
- Input order matters, and reordering would destroy the meaning.
- A direct nested scan would be too slow, but each item only needs to be added and removed once.

### When It's Not The Right Pattern

- If you need the earliest pending item, think queue instead.
- If you need arbitrary lookup by key, think map or set instead.
- If relationships are not tied to sequence order, a graph or interval model may fit better.
- If the input is sorted and the question is exact lookup or boundary finding, binary search is usually cleaner.
- If every pair may truly need comparison, a stack will not remove the quadratic work by itself.

### Basic Mechanics

Plain stack for matching or nested structure:

```ts
const stack: string[] = [];

for (const ch of input) {
  if (isOpening(ch)) {
    stack.push(ch);
  } else {
    const last = stack.pop();
    if (last === undefined || !matches(last, ch)) {
      return false;
    }
  }
}

return stack.length === 0;
```

Monotonic stack for "next greater" style questions:

```ts
const answer = new Array(nums.length).fill(0);
const stack: number[] = []; // unresolved indexes

for (let i = 0; i < nums.length; i++) {
  while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
    const j = stack.pop()!;
    answer[j] = i - j;
  }

  stack.push(i);
}
```

### Common Variations

- Stack of values when only the value matters.
- Stack of indexes when distance, position, or output placement matters.
- Stack of pairs like `[value, count]` when repeated values can be compressed.
- Increasing or decreasing monotonic stacks depending on which comparison resolves old items.
- Sentinel values to simplify boundary handling, when they do not hide important edge cases.

### Complexity Profile

Typical stack solutions run in `O(n)` time because each item is pushed once and popped at most once. Space is usually `O(n)` in the worst case for unresolved items.

The trade-off is extra memory for avoiding repeated scans. You keep just enough history to answer the next local conflict quickly.

### Common Pitfalls

- Calling `pop()` or reading the top item without checking `stack.length`.
- Forgetting to verify that the stack is empty at the end of matching problems.
- Storing values when indexes are needed for distances or output positions.
- Using `>=` when equal values should not count as greater, or using `>` when equals should resolve.
- Popping too early and losing information needed by later items.
- Assuming a monotonic stack is sorted globally; it only preserves the invariant needed by the scan.

## Binary Search

### What It Is

Binary search repeatedly cuts a search interval in half. The core idea is that one comparison at the middle tells you which side cannot contain the answer.

It can search a sorted collection directly, or search a range of possible answers when a yes/no check changes monotonically across that range.

### How To Spot It

Phrasing tells:

- Sorted array, sorted list, rotated sorted array, or "find target" in ordered data.
- First, last, minimum, maximum, lower bound, or insertion position.
- "Minimum `X` such that ..." or "maximum `X` such that ...".
- A huge numeric range where trying every value would be too slow.

Constraint tells:

- `O(log n)` is expected for lookup in ordered input.
- The input size or value range is large, but checking one candidate is manageable.
- If one candidate works, every larger candidate also works, or every smaller candidate also works.
- The data has enough order to discard half of the remaining options each step.

### When It's Not The Right Pattern

- If the input is unsorted and has no monotonic decision rule, binary search has nothing reliable to discard.
- If you need all matching values, a single binary search may only find one boundary; more work is needed.
- If the check for one candidate is as expensive as brute force over all candidates, the win may disappear.
- If the state changes after each query, the ordered assumption may no longer hold.
- If the problem is about matching nested or nearest unresolved sequence items, a stack may fit better.

### Basic Mechanics

Closed-interval binary search for exact lookup:

```ts
let lo = 0;
let hi = nums.length - 1;

while (lo <= hi) {
  const mid = lo + Math.floor((hi - lo) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  if (nums[mid] < target) {
    lo = mid + 1;
  } else {
    hi = mid - 1;
  }
}

return -1;
```

Binary search on the answer with a feasibility check:

```ts
let lo = minCandidate;
let hi = maxCandidate;

while (lo < hi) {
  const mid = lo + Math.floor((hi - lo) / 2);

  if (canFinish(mid)) {
    hi = mid;
  } else {
    lo = mid + 1;
  }
}

return lo;
```

### Common Variations

- Exact target lookup in a sorted array.
- First true or last false in a boolean decision array.
- Lower bound: first index where `nums[i] >= target`.
- Upper bound: first index where `nums[i] > target`.
- Rotated sorted arrays where one side of the interval is still ordered.
- Binary search on answer for rates, capacities, distances, or time limits.

### Complexity Profile

Direct binary search is usually `O(log n)` time and `O(1)` space. Binary search on answer is usually `O(checkCost * log range)` time and `O(1)` extra space, where `range` is the number of candidate values.

The trade-off is that you must prove the discard rule or feasibility check is monotonic. In return, you avoid scanning a sorted list or trying every candidate.

### Common Pitfalls

- Mixing closed intervals (`lo <= hi`) with half-open updates (`hi = mid`) by accident.
- Updating `lo = mid` or `hi = mid` in a loop that can repeat forever.
- Computing `mid` inconsistently when looking for the lower or upper boundary.
- Losing the current best valid answer when searching for a minimum or maximum.
- Using the wrong initial bounds for the answer range.
- Forgetting that rotated arrays need a reliable way to decide which side is ordered.
- Overflowing totals inside the feasibility check when values are large.
