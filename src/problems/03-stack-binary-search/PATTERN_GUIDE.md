# Stack & Binary Search Pattern Guide

## When To Think Stack

Use a stack when the most recent unresolved item is the next one you need to match or resolve. Parentheses and "next greater" style problems are classic tells.

## When To Think Binary Search

Use binary search when the input is sorted, partially sorted, or when the answer space is monotonic: if one candidate works, every larger or smaller candidate also works.

## Problem Tips

### 01. Valid Parentheses

- Tell: every closer must match the most recent unmatched opener.
- Tip: push openers and pop only when a compatible closer appears.
- Watch out: leftover openers mean the string is invalid.

### 02. Daily Temperatures

- Tell: each day waits for the next warmer future day.
- Tip: keep unresolved days in a structure ordered by when they appeared.
- Watch out: equal temperatures are not warmer.

### 03. Binary Search

- Tell: sorted input and exact target lookup.
- Tip: update the search bounds so the interval always shrinks.
- Watch out: midpoint and boundary updates are where off-by-one bugs live.

### 04. Search In Rotated Sorted Array

- Tell: the array is sorted except for one rotation break.
- Tip: at each step, one half is still sorted; use that half to decide where the target can be.
- Watch out: handle the unrotated case naturally.

### 05. Koko Eating Bananas

- Tell: you are searching for the minimum speed that satisfies a deadline.
- Tip: the answer space is speeds, not pile indexes.
- Watch out: each pile takes a whole number of hours rounded up.
