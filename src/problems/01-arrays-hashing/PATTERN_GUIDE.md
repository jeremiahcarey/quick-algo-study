# Arrays & Hashing Pattern Guide

## When To Think Hash Map Or Hash Set

Reach for hashing when the problem asks about membership, duplicates, counts, grouping, or finding a complement. The tell is usually that a nested loop would work, but you can ask: "Could I remember what I have already seen?"

Hashing often trades O(n) extra space for O(n) time.

## Problem Tips

### 01. Two Sum

- Tell: you need a previous value that pairs with the current value.
- Tip: as you scan left to right, think about the complement you wish you had already seen.
- Watch out: do not use the same array index twice.

### 02. Contains Duplicate

- Tell: the only thing that matters is whether a value has appeared before.
- Tip: you do not need to count every occurrence if you can stop early.
- Watch out: negative numbers and zero are ordinary values.

### 03. Group Anagrams

- Tell: words belong together if they share the same character signature.
- Tip: create one stable key for each word and collect words under that key.
- Watch out: grouping by length alone is not enough.

### 04. Top K Frequent Elements

- Tell: the problem is about frequency, then selecting the biggest counts.
- Tip: separate the counting step from the selection step.
- Watch out: the output order does not matter, but the chosen values do.
