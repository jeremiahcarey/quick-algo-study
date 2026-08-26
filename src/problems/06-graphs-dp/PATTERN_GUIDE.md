# Graphs & Intro DP Pattern Guide

## When To Think Graph Traversal

Use graph traversal when values are connected by adjacency, prerequisites, neighbors, or grid movement. Decide what counts as a neighbor before coding.

## When To Think Dynamic Programming

Use dynamic programming when the same subproblem appears many times and a current answer can be built from earlier answers.

## Problem Tips

### 01. Number Of Islands

- Tell: land cells form connected components in a grid.
- Tip: when you discover land, traverse the whole island so it is counted once.
- Watch out: diagonal land is not connected.

### 02. Clone Graph

- Tell: nodes can point back to nodes you have already seen.
- Tip: keep a map from original nodes to cloned nodes.
- Watch out: cloning values alone is not enough; preserve neighbor links.

### 03. Course Schedule

- Tell: prerequisites form directed dependencies, and cycles make completion impossible.
- Tip: either track DFS visit states or repeatedly take courses with no remaining prerequisites.
- Watch out: cycles can involve more than two courses.

### 04. Climbing Stairs

- Tell: ways to reach step `n` depends on ways to reach earlier steps.
- Tip: write out the first few values by hand and look for the recurrence.
- Watch out: a recursive brute force repeats a lot of work.

### 05. House Robber

- Tell: each house creates a choice between taking it and skipping its neighbor, or skipping it.
- Tip: track the best result with and without the current house.
- Watch out: a locally large house is not always part of the best total.

### 06. Coin Change

- Tell: the best answer for an amount can be built from smaller amounts.
- Tip: compute the minimum coins needed for every amount from 0 up to the target.
- Watch out: return -1 when the target amount is unreachable.
