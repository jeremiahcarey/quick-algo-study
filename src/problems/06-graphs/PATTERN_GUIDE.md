# Graphs Pattern Guide

## When To Think Graph Traversal

Use graph traversal when values are connected by adjacency, prerequisites, neighbors, or grid movement. Decide what counts as a neighbor before coding.

## Core Shapes

- Grid traversal: cells are connected by up/down/left/right movement.
- Node traversal: objects point to neighbor objects, sometimes cyclically.
- Dependency traversal: directed edges can create prerequisite chains and cycles.

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
