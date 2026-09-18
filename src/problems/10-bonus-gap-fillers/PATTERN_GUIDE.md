# Bonus Gap-Fillers Pattern Guide

These are five common interview shapes that fall outside the main track: in-place matrix transforms, nested-structure recursion, prefix/suffix passes, intervals, and backtracking/subsets. Treat this folder as a quick map of patterns you will see often, even when they do not belong cleanly to one bigger category.

## In-Place Matrix Transforms

### Core Idea

The input grid is the object being changed. Instead of building a second grid, reason about where each coordinate should move and update cells without losing values.

Rotate Image is the representative example: the phrase `n x n` plus `in place` means index movement matters more than data structure choice.

### How To Spot It

- The problem mentions a matrix, image, board, or grid.
- The output is the same shape as the input, just rearranged.
- Constraints say to mutate the input, use `O(1)` extra space, or return nothing.
- The important relationships are rows, columns, diagonals, or layers.

### Basic Mechanics

```ts
function transformMatrix(matrix: number[][]): void {
  const n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }

  for (const row of matrix) {
    row.reverse();
  }
}
```

For other transforms, draw a `3 x 3` or `4 x 4` grid and write the old-to-new coordinate mapping before coding.

### Complexity Profile

Most in-place matrix transforms touch every cell once or a constant number of times: `O(n^2)` time for an `n x n` matrix and `O(1)` extra space.

### Common Pitfalls

- Accidentally allocating and returning a new matrix.
- Overwriting a value before saving the value that needs to move next.
- Mixing up `row` and `col` in coordinate formulas.
- Forgetting odd-sized matrices have a center cell that should not move.

## Nested-Structure Recursion

### Core Idea

When data can contain more data of the same shape, solve one level and let recursion handle the rest. Carry just enough state to know where you are, such as current depth.

Flatten Deeply Nested Array is the representative example: each item is either a number or another nested array, and depth controls how far the operation applies.

### How To Spot It

- The type is recursive, like `Array<number | NestedArray>`.
- The input can be nested to an unknown depth.
- The problem asks for behavior that changes by depth or level.
- Built-in flattening or traversal helpers are disallowed.

### Basic Mechanics

```ts
type Nested<T> = Array<T | Nested<T>>;

function walk<T>(items: Nested<T>, depth: number, limit: number): Nested<T> {
  const result: Nested<T> = [];

  for (const item of items) {
    if (Array.isArray(item) && depth < limit) {
      result.push(...walk(item, depth + 1, limit));
    } else {
      result.push(item);
    }
  }

  return result;
}
```

### Complexity Profile

Traversal is usually `O(m)` time, where `m` is the number of values and nested arrays visited. Extra space is `O(d)` for recursion depth plus whatever output the problem requires.

### Common Pitfalls

- Treating depth as one-based when the prompt defines the outer array as depth `0`.
- Flattening too far when the limit is `0` or exactly reached.
- Forgetting that arrays can contain empty arrays or more arrays.
- Using a banned helper such as `Array.flat` when the prompt forbids it.

## Prefix And Suffix Passes

### Core Idea

Each answer needs information from both sides of an index. A left-to-right pass gathers what came before; a right-to-left pass adds what comes after.

Product Of Array Except Self is the representative example: every position depends on all other positions, and direct division is intentionally removed.

### How To Spot It

- Each output index asks about all elements except, before, or after that index.
- A naive nested loop would recompute similar left/right information repeatedly.
- The prompt asks for linear time.
- Division, mutation, or another shortcut may be restricted.

### Basic Mechanics

```ts
function combineLeftRight(nums: number[]): number[] {
  const result = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}
```

### Complexity Profile

The usual target is `O(n)` time. Space is `O(n)` for the returned answer and often `O(1)` extra space if you reuse the output array for one side.

### Common Pitfalls

- Including `nums[i]` in its own answer.
- Breaking on zero values instead of letting the passes account for them.
- Allocating separate prefix and suffix arrays when the target space asks you not to.
- Initializing the running value incorrectly; the neutral product is `1`.

## Intervals

### Core Idea

Intervals describe ranges with a start and end. Sorting usually turns many pairwise comparisons into one scan because only the current merged range needs to be compared with the next range.

Merge Intervals is the representative example: once intervals are ordered, overlap decisions become local.

### How To Spot It

- Inputs look like `[start, end]`, meetings, ranges, bookings, or windows.
- The question asks to merge, insert, count, remove, or detect overlap.
- Unsorted input is allowed.
- Boundary rules matter: touching endpoints may or may not count as overlap.

### Basic Mechanics

```ts
function mergeRanges(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [];

  for (const [start, end] of intervals) {
    const last = merged[merged.length - 1];
    if (!last || start > last[1]) {
      merged.push([start, end]);
    } else {
      last[1] = Math.max(last[1], end);
    }
  }

  return merged;
}
```

### Complexity Profile

Sorting dominates at `O(n log n)` time, followed by an `O(n)` scan. Output space is `O(n)` in the worst case; extra space depends on whether sorting mutates the input.

### Common Pitfalls

- Comparing every pair after sorting when one scan is enough.
- Using `<` versus `<=` without matching the prompt's endpoint rule.
- Assuming input intervals arrive sorted.
- Mutating caller-owned interval arrays when the problem expects fresh output.

## Backtracking And Subsets

### Core Idea

Backtracking explores a choice tree. At each decision point, choose something, recurse, then undo that choice so the next branch starts cleanly.

Subsets is the representative example: every unique number is either present or absent in each candidate subset.

### How To Spot It

- The problem asks for all combinations, subsets, arrangements, or valid configurations.
- The output size is exponential by nature.
- You can describe the solution as a sequence of choices.
- The prompt often says input values are unique, or asks how to handle duplicates.

### Basic Mechanics

```ts
function buildSubsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(index: number): void {
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    backtrack(index + 1);
    path.push(nums[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return result;
}
```

### Complexity Profile

Subsets produce `2^n` groups, and copying each group makes the usual time bound `O(n * 2^n)`. Auxiliary recursion space is `O(n)` plus the output.

### Common Pitfalls

- Forgetting the empty subset.
- Pushing `path` itself instead of a copy.
- Not undoing a choice before exploring the next branch.
- Assuming output order matters when the prompt says it does not.
