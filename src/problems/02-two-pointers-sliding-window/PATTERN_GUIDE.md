# Two Pointers & Sliding Window Pattern Guide

## When To Think Two Pointers

Use two pointers when you can make progress from both ends, or when a sorted array lets you move one pointer based on whether a value is too small or too large.

## When To Think Sliding Window

Use a sliding window for contiguous substrings or subarrays where you expand to include more data and shrink to restore a condition.

## Problem Tips

### 01. Valid Palindrome

- Tell: comparisons happen from the outside toward the center.
- Tip: skip characters that should not participate before comparing.
- Watch out: case and punctuation should not affect the answer.

### 02. 3Sum

- Tell: the array asks for combinations, but sorting can create directional choices.
- Tip: after choosing one fixed value, think about what two remaining values must sum to.
- Watch out: duplicate triplets are the hard part, not just finding any triplet.

### 03. Best Time To Buy/Sell Stock

- Tell: each day is a potential sell day, and the best buy must be before it.
- Tip: track the cheapest price seen so far while scanning once.
- Watch out: never sell before buying.

### 04. Longest Substring Without Repeating Characters

- Tell: the answer is a longest contiguous substring under a "no duplicates" rule.
- Tip: when a duplicate appears, move the left edge far enough to make the window valid again.
- Watch out: do not move the left edge backward.

### 05. Minimum Window Substring

- Tell: you need the shortest contiguous substring satisfying required character counts.
- Tip: expand until the window is valid, then shrink while it remains valid.
- Watch out: duplicate characters in `t` matter.
