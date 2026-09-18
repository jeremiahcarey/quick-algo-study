# Graphs Pattern Guide

Graph traversal is tree traversal plus a `visited` set. Trees have one clean path from parent to child; graphs can point sideways, backward, or in cycles, so `visited` is what keeps the walk finite and keeps one connected area from being counted many times.

The core move is simple: decide what each node is, decide how to get its neighbors, and traverse only nodes you have not already handled.

## How To Spot It

- The prompt describes `neighbors`, `edges`, adjacency lists, connections, prerequisites, dependencies, routes, or relationships.
- A grid cell can move to nearby cells, usually up/down/left/right.
- You need to count connected groups, decide whether everything is reachable, copy a connected structure, or detect whether dependencies contradict each other.
- Constraints mention `V` and `E`, nodes and edges, `m x n` grids, or lists of pairs like `[course, prerequisite]`.
- The input can contain cycles, shared neighbors, or disconnected parts.

## When It's Not The Right Pattern

- Use tree traversal when each node has only child links and no chance of revisiting the same object through another path.
- Use dynamic programming when the hard part is repeated subproblems with a best/count value, not walking relationships.
- Use two pointers or sliding window when the data is linear and the useful state is a contiguous range.
- Use union-find when the problem is only about merging/querying connectivity and does not need an actual traversal order.
- Use shortest-path algorithms when edges have weights or when the question asks for minimum total cost, not just reachability by layers.

## Basic Mechanics

### DFS With Visited

```ts
const visited = new Set<string>();

function dfs(node: string): void {
  if (visited.has(node)) {
    return;
  }

  visited.add(node);

  for (const neighbor of neighbors(node)) {
    dfs(neighbor);
  }
}
```

Mark the node before visiting neighbors. If you mark it after, a cycle can re-enter the same node before it is protected.

### BFS With Visited

```ts
const visited = new Set<string>();
const queue: string[] = [start];
let head = 0;

visited.add(start);

while (head < queue.length) {
  const node = queue[head];
  head += 1;

  for (const neighbor of neighbors(node)) {
    if (visited.has(neighbor)) {
      continue;
    }

    visited.add(neighbor);
    queue.push(neighbor);
  }
}
```

BFS visits by distance layers. Add to `visited` when enqueuing, not when dequeuing, so the same node is not queued many times.

### Grid Traversal

A grid is a graph where each cell is a node. The neighbor function is usually a bounds check plus a directions array.

```ts
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function inBounds(row: number, col: number): boolean {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

for (const [dr, dc] of directions) {
  const nextRow = row + dr;
  const nextCol = col + dc;

  if (!inBounds(nextRow, nextCol)) {
    continue;
  }

  // Visit the neighboring cell if it is usable and not already visited.
}
```

Confirm whether diagonal movement counts before using this skeleton.

### Mapping Original Nodes To Derived Nodes

When creating a new graph-like structure from an existing one, keep a `Map` from original nodes to their derived nodes. This handles cycles and shared neighbors.

```ts
const seen = new Map<Node, Node>();

function build(node: Node): Node {
  if (seen.has(node)) {
    return seen.get(node)!;
  }

  const copy = new Node(node.val);
  seen.set(node, copy);

  for (const neighbor of node.neighbors) {
    copy.neighbors.push(build(neighbor));
  }

  return copy;
}
```

Store the mapping before building neighbors. Otherwise a cycle can ask for the same copy before it exists.

## Common Variations

- Connected components: start a traversal from each unvisited node and treat everything reached as one group.
- Grids: translate each `(row, col)` to a node and use a four-direction array for neighbors.
- Topological ordering / dependency cycles: directed edges represent "must happen before"; extra state can distinguish done nodes from nodes still in the current path.
- Cloning or transforming graphs: traverse the original graph while a `Map` relates original nodes to copied or derived nodes.
- Reachability: answer whether a target, all nodes, or a required subset can be reached from a start.

## Complexity Profile

Most plain graph traversals are `O(V + E)` time: each node is visited once and each edge is inspected once. For grids, that becomes `O(rows * cols)` because each cell has at most four neighbors.

The usual space cost is `O(V)` for `visited`, the call stack or queue, and any maps you build. The trade-off is intentional: spend memory to avoid infinite loops, duplicate work, and repeated counting.

## Common Pitfalls

- Marking `visited` too late, which can create duplicate queue entries or infinite recursion.
- Forgetting grid bounds checks before reading `grid[row][col]`.
- Treating diagonal grid cells as connected when the prompt only allows horizontal/vertical movement.
- Mixing up directed and undirected edges; prerequisites are directed, ordinary neighbor lists may be undirected.
- Keying `visited` incorrectly, such as using only `row` instead of both `row` and `col`.
- Using node values as identity when the graph is object-based and values are not guaranteed to be unique.

## Practice Note

Before attempting the problems, practice typing the DFS, BFS, grid-directions, and original-to-copy `Map` skeletons from memory. The goal is to always have a starting shape before adding the problem-specific line.
