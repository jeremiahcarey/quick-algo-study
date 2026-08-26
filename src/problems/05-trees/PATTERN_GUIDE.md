# Trees Pattern Guide

## When To Think DFS

Use depth-first search when a node's answer depends on its children, or when you need to carry bounds/path state down the tree.

## When To Think BFS

Use breadth-first search when the problem asks for level order, shortest distance by layers, or per-level grouping.

## Problem Tips

### 01. Invert Binary Tree

- Tell: every node needs the same local left/right swap.
- Tip: solve one node, then apply the same idea recursively or with a stack.
- Watch out: null children are fine; just leave them null.

### 02. Max Depth

- Tell: a node's depth depends on the deeper of its two subtrees.
- Tip: define the depth of an empty tree first.
- Watch out: count nodes, not edges, for these tests.

### 03. Same Tree

- Tell: two trees must match in both structure and values.
- Tip: compare corresponding nodes at the same time.
- Watch out: one null and one non-null is immediately different.

### 04. Level Order Traversal

- Tell: output is grouped by distance from the root.
- Tip: process one queue level at a time.
- Watch out: do not merge all node values into one flat list.

### 05. Validate BST

- Tell: every subtree has value boundaries inherited from ancestors.
- Tip: carry lower and upper bounds as you traverse.
- Watch out: checking only parent-child relationships misses deeper violations.

### 06. Lowest Common Ancestor

- Tell: in a BST, node values tell you whether both targets are left, right, or split.
- Tip: walk from the root until the targets are no longer on the same side.
- Watch out: a target node can be its own ancestor.
