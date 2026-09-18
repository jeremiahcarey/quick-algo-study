# Arrays & Hashing Pattern Guide

## What The Pattern Is

Arrays & hashing is about turning repeated scans into quick lookups. When a problem asks whether a value exists, how many times it appears, which values belong together, or which value would complete a relationship, you can often keep a small memory of what you have seen.

The core move is to create a key for the thing you care about, then store or check that key in a `Map` or `Set`. This trades extra space for simpler, faster decisions while scanning the input.

## How To Spot It

Problem statements often point here when they use phrases like:

- "contains duplicate," "appears twice," "all values are distinct"
- "count," "frequency," "most frequent," "occurrences"
- "group together," "same letters," "same signature"
- "find two values," "pair with target," "matching value"
- "return any order" or "order does not matter"

Constraint tells also matter. Hashing is a strong fit when the input can be large, a nested loop would be obvious but slow, and exact equality is enough to compare items. It is especially natural for arrays of numbers, strings, or values that can be converted into stable keys.

## When It's Not The Right Pattern

Do not force hashing when the problem is really about order, adjacency, or ranges. If the array is sorted and you need a pair, two pointers may use less space. If you need a contiguous subarray or window, prefix sums or sliding window usually describe the shape better.

Hashing also may not be enough when you need sorted output, nearest values, medians, or repeated min/max removal. Those often need sorting, heaps, binary search, or balanced structures after, or instead of, the hash step.

Be careful when the key is hard to define. If two items are "similar" rather than exactly equal, or if the comparison depends on position, state, or mutation, a plain lookup table may hide the real problem.

## Basic Mechanics

Membership and duplicate checks usually look like this:

```ts
const seen = new Set<number>();

for (const value of nums) {
  if (seen.has(value)) {
    // Found a repeated or previously useful value.
  }

  seen.add(value);
}
```

Counting starts with a `Map` from value to count:

```ts
const counts = new Map<number, number>();

for (const value of nums) {
  counts.set(value, (counts.get(value) ?? 0) + 1);
}
```

Grouping uses a stable key and stores all matching items under that key:

```ts
const groups = new Map<string, string[]>();

for (const item of items) {
  const key = makeKey(item);
  const group = groups.get(key) ?? [];
  group.push(item);
  groups.set(key, group);
}

const result = [...groups.values()];
```

Complement-style scans check for the needed partner before recording the current item:

```ts
const indexByValue = new Map<number, number>();

for (let index = 0; index < nums.length; index++) {
  const value = nums[index];
  const needed = target - value;

  if (indexByValue.has(needed)) {
    // Current value pairs with a previous value.
  }

  indexByValue.set(value, index);
}
```

## Common Variations

- Membership: track whether a value has appeared before.
- Counting: build a frequency table, then answer questions from counts.
- Grouping: convert each item to a canonical key, then collect matching items.
- Complements: for each item, ask what partner value would complete the target relationship.
- Top-k by frequency: count first, then select the largest counts with sorting, buckets, or a heap.
- Fixed alphabet strings: use a small count array as the key instead of sorting characters.

## Complexity Profile

The usual trade-off is `O(n)` extra space for `O(n)` average-time scanning. `Map` and `Set` operations are expected `O(1)`, so membership, counting, and simple complement checks usually avoid `O(n^2)` nested loops.

Key creation can change the cost. A sorted string key costs `O(L log L)` per string of length `L`; a fixed-size character count key can be closer to `O(L)`. After counting, selecting top values may cost `O(u log u)` by sorting `u` unique values, `O(u log k)` with a heap, or `O(n + u)` with buckets.

Space is usually proportional to the number of unique keys, plus any grouped output the problem requires.

## Common Pitfalls

- Updating the lookup table before checking it when the current item must not match itself.
- Using a plain object where keys can collide with object properties; prefer `Map` and `Set`.
- Building unstable string keys, such as joining counts without separators.
- Assuming output order matters when the statement says any order is valid.
- Forgetting that negative numbers, zero, empty strings, and repeated equal values are normal inputs.
- Counting everything when the problem allows an early answer.
- Grouping by an incomplete key, such as length alone for strings.
