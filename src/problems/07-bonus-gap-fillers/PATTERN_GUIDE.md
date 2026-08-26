# Bonus Gap-Fillers Pattern Guide

These problems are optional extras for common patterns that the core 30-problem track only lightly covers or does not cover at all.

## When To Think Matrix Manipulation

Use matrix-specific reasoning when the problem is about rows, columns, diagonals, layers, or in-place grid transforms. Draw indexes for a 3 x 3 example before coding.

## When To Think Recursion Or Explicit Stack

Use recursion or a stack when the input is recursively shaped, like arrays inside arrays, nodes inside nodes, or choices that branch.

## When To Think Prefix/Suffix

Use prefix/suffix passes when each answer needs information from the left side and the right side of an index.

## When To Think Intervals

Use interval logic when each input item has a start and end. Sorting by start or end often turns many comparisons into one scan.

## When To Think Greedy

Use greedy when a local choice has a clear ranking and taking the best available option cannot make future choices worse.

## Problem Tips

### 01. Rotate Image

- Tell: an n x n matrix must be transformed in place.
- Tip: either think in layers or combine two simpler matrix operations.
- Watch out: returning a new matrix misses the point of the problem.

### 02. Flatten Deeply Nested Array

- Tell: arrays can contain numbers or more arrays, and there is a depth limit.
- Tip: track the current depth as you traverse.
- Watch out: `n = 0` means nothing should be flattened.

### 03. Product Of Array Except Self

- Tell: each output position needs everything except the value at that position.
- Tip: ask what information is available from the left and from the right.
- Watch out: division is intentionally off the table.

### 04. Merge Intervals

- Tell: inputs are `[start, end]` ranges that may overlap.
- Tip: sort first so only the latest merged interval needs comparison.
- Watch out: `[1, 4]` and `[4, 5]` overlap because they share an endpoint.

### 05. Subsets

- Tell: the problem asks for all possible choices from a unique set.
- Tip: for each number, branch on including it or skipping it.
- Watch out: the empty subset is part of the answer.

### 06. Maximum Units On A Truck

- Tell: each box type has a value per box, and the truck has a box-count capacity.
- Tip: think about which box type is always best to take before lower-value types.
- Watch out: you may take only some boxes from the final type that fits.
