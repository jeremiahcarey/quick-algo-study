# Two Pointers & Sliding Window Pattern Guide

## Two Pointers

### What It Is

Two pointers keep two positions in the same sequence and move them deliberately instead of trying every pair. The core idea is that one comparison gives enough information to discard a whole group of impossible choices.

Most often the pointers move toward each other from the ends. A sorted array, mirrored string positions, or an output that does not depend on original order can make each move meaningful.

### How To Spot It

Problem statement tells:

- A sorted array, sorted string, or permission to return values without preserving original order.
- Pair or triplet wording: two values, three values, closest sum, target sum, duplicate-free combinations.
- Mirrored comparisons: palindrome, first/last, left/right, outside toward center.
- A rule where moving the smaller or larger side clearly changes the result in one direction.

Constraint tells:

- A direct nested loop is easy but likely too slow.
- You need O(1) or low extra space besides the returned answer.
- The input order matters only as an ordered line, not as arbitrary graph-like relationships.

### When It's Not The Right Pattern

- If the answer can use non-contiguous arbitrary subsets, think backtracking or dynamic programming.
- If the input is unsorted and original indexes must be preserved, hashing may be the safer first idea.
- If the prompt asks for longest or shortest contiguous substring/subarray under a changing condition, use sliding window.
- If no pointer move can rule out future candidates, two pointers just becomes a disguised nested loop.

### Basic Mechanics

```ts
let left = 0;
let right = values.length - 1;

while (left < right) {
  const current = values[left] + values[right];

  if (current < target) {
    left++;
  } else if (current > target) {
    right--;
  } else {
    // record or validate the match
    left++;
    right--;
  }
}
```

For mirrored string checks, the comparison changes but the movement shape is the same: inspect `left` and `right`, handle anything that should be ignored, then move inward after a valid comparison.

### Common Variations

- Converging ends: compare outside values and move inward.
- Pair sum in sorted order: move the low side up when too small and the high side down when too large.
- Fixed anchor plus inner two pointers: choose one value, then solve the remaining pair inside the suffix.
- Fast/slow pointers: useful for linked lists or in-place compaction, but the movement is not usually symmetric.

### Complexity Profile

Two pointers is usually O(n) time with O(1) extra space. If sorting is needed first, expect O(n log n) time before the pointer pass; if each anchor runs an inner pointer pass, expect O(n²). The trade-off is using order to avoid extra storage or brute-force pair checks.

### Common Pitfalls

- Moving the wrong pointer after a comparison.
- Forgetting that `left < right` prevents reusing the same element.
- Letting duplicate values create duplicate results.
- Sorting when the required answer depends on original indexes.
- Skipping irrelevant characters on only one side of a mirrored check.
- Counting output space as extra workspace when the problem excludes it.

## Sliding Window

### What It Is

Sliding window keeps a contiguous range, usually `[left, right]`, and updates small state as the range grows or shrinks. The core idea is that adding one item on the right and removing items on the left is cheaper than rebuilding every substring or subarray.

The window expands to include new candidates, then shrinks when it is invalid or when a valid window can be tightened.

### How To Spot It

Problem statement tells:

- Words like contiguous, substring, subarray, window, interval, segment, longest, shortest, minimum, or maximum.
- A condition about what the current range contains: no repeats, all required characters, at most K, at least K, exact counts.
- The answer is one range or a measurement of a range, not a rearranged set of values.
- The input must stay in its original order.

Constraint tells:

- Checking every substring/subarray would be O(n²) or worse.
- You can update validity by adding the next right item and removing the current left item.
- The data needed to judge the window is small: counts, last positions, a running sum, or a few totals.

### When It's Not The Right Pattern

- If the chosen items are not contiguous, sliding window does not fit.
- If the input must be sorted and you are matching values from opposite ends, use two pointers.
- If negative numbers make a running-sum window lose monotonic behavior, consider prefix sums instead.
- If removing the left item does not let you update the condition locally, another structure may be needed.

### Basic Mechanics

Shrink until the window is valid again:

```ts
let left = 0;
let best = 0;
const counts = new Map<string, number>();

for (let right = 0; right < s.length; right++) {
  const inChar = s[right];
  counts.set(inChar, (counts.get(inChar) ?? 0) + 1);

  while (/* window is invalid */) {
    const outChar = s[left];
    counts.set(outChar, (counts.get(outChar) ?? 0) - 1);
    left++;
  }

  best = Math.max(best, right - left + 1);
}
```

Shrink while the window is valid to find a minimum:

```ts
let left = 0;
let bestStart = 0;
let bestLength = Infinity;

for (let right = 0; right < s.length; right++) {
  // add s[right] to the window state

  while (/* window satisfies the requirement */) {
    if (right - left + 1 < bestLength) {
      bestStart = left;
      bestLength = right - left + 1;
    }

    // remove s[left] from the window state
    left++;
  }
}
```

### Common Variations

- Longest valid window: expand right, shrink only when the rule is broken.
- Shortest covering window: expand until all requirements are met, then shrink while still valid.
- Fixed-size window: move both sides once the size reaches K.
- At-most K conditions: count what violates the rule and shrink until it is allowed again.
- Last-seen index jumps: move `left` directly past a repeated item instead of one step at a time.

### Complexity Profile

Sliding window is usually O(n) time because each side of the window moves forward at most n times. Space is often O(k), where k is the number of distinct values tracked in the current window or requirement. The trade-off is maintaining extra state so you do not rescan each candidate range.

### Common Pitfalls

- Treating non-contiguous subsequences as windows.
- Moving `left` backward when using last-seen positions.
- Updating the best answer before the window is valid, or after it has already been shrunk too far.
- Forgetting duplicate requirements when the target contains repeated characters.
- Mixing inclusive and exclusive window lengths.
- Leaving zero-count entries that make validity checks misleading.
