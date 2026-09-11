# Heap Pattern Guide

Use a heap or priority queue when you repeatedly need the current largest or smallest item while values are being considered.

## When To Think Heap

- The prompt asks for kth largest, kth smallest, top k, or repeated highest-priority choices.
- Sorting everything works, but you only need a small ranked frontier.
- New values can enter while the best or worst current value needs to leave.

## Core Template

1. Decide whether the heap should expose the smallest or largest item.
2. Push candidates into the heap.
3. Pop when the heap is too large or when you need the next priority item.
4. Return the heap top or the last popped value, depending on the problem.

## Problem Tips

### 01. Kth Largest Element In An Array

- Tell: you need one ranked value, not a fully sorted array.
- Tip: a min-heap of size `k` keeps the current `k` largest values.
- Watch out: `k = 1` means the maximum, and `k = nums.length` means the minimum.
