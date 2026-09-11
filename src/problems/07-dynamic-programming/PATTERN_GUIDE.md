# Dynamic Programming Pattern Guide

Dynamic programming is useful when the same subproblem appears many times and a current answer can be built from earlier answers.

## When To Think DP

- The prompt asks for the number of ways, best value, minimum cost, or longest length.
- A brute-force recursion branches into repeated states.
- The decision at index `i` depends on earlier indexes, smaller amounts, or prefixes of strings.

## Core Template

1. Define the state in plain English.
2. Choose what each `dp` entry stores.
3. Set base cases.
4. Write the recurrence from smaller states to larger states.
5. Return the entry that answers the original question.

## Common Sub-Shapes

- 1D linear DP: each position depends on one or two earlier positions.
- Knapsack-style DP: each target amount/capacity tries every option.
- Subsequence DP: each element can extend earlier compatible answers.
- String segmentation DP: each prefix may be reachable from a valid earlier prefix.
- 2D grid DP: each cell compares prefixes of two inputs.

## Problem Tips

### 01. Climbing Stairs

- Tell: ways to reach step `n` depends on ways to reach earlier steps.
- Tip: write out the first few values by hand and look for the recurrence.
- Watch out: a recursive brute force repeats a lot of work.

### 02. House Robber

- Tell: each house creates a choice between taking it and skipping its neighbor, or skipping it.
- Tip: track the best result with and without the current house.
- Watch out: a locally large house is not always part of the best total.

### 03. Coin Change

- Tell: the best answer for an amount can be built from smaller amounts.
- Tip: compute the minimum coins needed for every amount from 0 up to the target.
- Watch out: return -1 when the target amount is unreachable.

### 04. Longest Increasing Subsequence

- Tell: you need the longest ordered-by-index sequence where values keep increasing.
- Tip: decide whether `dp[i]` means the best subsequence ending at `i` or use a tails array.
- Watch out: subsequences do not need to be contiguous.

### 05. Word Break

- Tell: a string can be split into dictionary words, and each prefix can depend on an earlier prefix.
- Tip: let `dp[i]` mean `s.slice(0, i)` can be segmented.
- Watch out: dictionary words may be reused.

### 06. Longest Common Subsequence

- Tell: you are comparing two strings while preserving order but allowing skipped characters.
- Tip: use a 2D table where each cell answers for two prefixes.
- Watch out: subsequence is not substring; characters do not need to be contiguous.
