# Trees Pattern Guide

## What The Pattern Is

Binary tree problems are usually about visiting nodes through `left` and `right` links. Most beginner and intermediate tree problems are DFS with the base case first: decide what an empty node means, do one local action, then let the same rule handle the subtrees.

The core idea is that a tree repeats the same shape at every node. If you can solve the question for one node assuming its children can answer their part, the whole tree follows. When the statement says `level`, think BFS instead: visit nodes by distance from the root.

## How To Spot It

Phrasing tells:

- The input is a `root`, `TreeNode`, binary tree, or binary search tree.
- The statement says subtree, ancestor, descendant, leaf, depth, height, path, level, or level order.
- The answer for a node depends on its children, such as max depth or whether two subtrees match.
- The problem asks for values grouped by distance from the root.
- The problem gives examples in level-order array form like `[3, 9, 20, null, null, 15, 7]`.

Constraint tells:

- There are no random indexes into the structure; movement is through `left` and `right`.
- The tree may be empty, so `root` can be `null`.
- A skewed tree is possible, so recursion depth can grow to `n`.
- A BST problem includes strict ordering rules that apply to whole subtrees, not just direct children.

## When To Use DFS Vs BFS

Use DFS when:

- A node's answer depends on answers from its subtrees.
- You need to carry path state, bounds, depth, or ancestor information downward.
- You are comparing corresponding nodes in two trees.
- You only need one branch at a time.

Use BFS when:

- The statement says level, level order, width, or layer.
- Output must be grouped by rows from top to bottom.
- You need to process all nodes at distance `d` before nodes at distance `d + 1`.

DFS is the default for tree recursion. BFS is the default when level boundaries matter.

## When It's Not The Right Pattern

Do not force plain tree DFS/BFS when:

- The input is an arbitrary graph with cycles. Use graph traversal with a `visited` set.
- The problem is mainly about sorting, frequency counting, or membership. Use arrays, hashing, or heaps.
- The tree is only a compact encoding of another problem, such as intervals or expressions, and the real work is elsewhere.
- The problem needs many updates and repeated range queries. A specialized data structure may matter more than one traversal.
- The problem asks for the next greater value, monotonic order, or sliding windows over a list of values.

A tree-shaped input is the tell, but the requested operation still decides the pattern.

## Basic Mechanics

Start every recursive DFS with the base case. Do not read `node.val`, `node.left`, or `node.right` until after the null check.

```ts
function dfs(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  // local action for this node
  dfs(node.left);
  dfs(node.right);
}
```

Many DFS problems return a value from each subtree. Define the empty-tree value first, combine the left and right answers, then return the current node's answer.

```ts
function dfs(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  const left = dfs(node.left);
  const right = dfs(node.right);

  return 1 + Math.max(left, right);
}
```

Some DFS problems carry information down as parameters. BST validation is the common example: every child inherits limits from its ancestors.

```ts
function dfs(node: TreeNode | null, lower: number | null, upper: number | null): boolean {
  if (node === null) {
    return true;
  }

  if (lower !== null && node.val <= lower) {
    return false;
  }

  if (upper !== null && node.val >= upper) {
    return false;
  }

  return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
}
```

BFS uses a queue. In TypeScript, prefer a moving index over repeated `shift()` so dequeuing stays cheap.

```ts
if (root === null) {
  return;
}

const queue: TreeNode[] = [root];
let head = 0;

while (head < queue.length) {
  const node = queue[head]!;
  head += 1;

  // local action for this node

  if (node.left !== null) {
    queue.push(node.left);
  }

  if (node.right !== null) {
    queue.push(node.right);
  }
}
```

For level-order output, process one queue length at a time. That freezes the current level before children for the next level are appended.

```ts
const result: number[][] = [];

if (root === null) {
  return result;
}

const queue: TreeNode[] = [root];
let head = 0;

while (head < queue.length) {
  const levelSize = queue.length - head;
  const level: number[] = [];

  for (let i = 0; i < levelSize; i += 1) {
    const node = queue[head]!;
    head += 1;

    level.push(node.val);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  result.push(level);
}

return result;
```

The mechanics are small. Variations usually add one local action: calculate a value, compare a pair, update carried state, or append to the current level.

## Common Variations

- Return a number or boolean from each subtree, such as depth or validity.
- Carry information down, such as depth, path state, or lower and upper BST limits.
- Compare two trees at once by checking corresponding nodes together.
- Mutate the tree while traversing, then return the original root.
- Use BST ordering to choose a side instead of visiting every node.
- Process BFS one level at a time for grouped output.
- Stop early when a DFS or BST search already proves the answer.

## Complexity Profile

Most tree traversals visit each node once, so time is usually `O(n)`.

DFS space is the recursion stack: `O(h)`, where `h` is the tree height. That is `O(log n)` for a balanced tree and `O(n)` for a skewed tree. If you build output, include the output size separately.

BFS space is the queue: `O(w)`, where `w` is the maximum width of the tree. In the worst case, `w` can be `O(n)`.

BST-guided searches can be `O(h)` time because they choose one side at each step. In a skewed BST, that can still be `O(n)`.

## Common Pitfalls

- Missing the `null` base case or placing it after reading from the node.
- Returning the wrong empty-tree value, such as `1` for empty depth.
- Checking only a node's direct children when the rule must hold for whole subtrees.
- Forgetting that BST validity is strict, so duplicates are not automatically allowed.
- Losing child references when mutating while traversing.
- Merging all BFS values into one list when the output needs level groups.
- Letting nodes added during BFS change the size of the level currently being processed.
- Ignoring skewed trees when reasoning about recursion space.

## Practice Note

Before attempting the problems, practice typing the DFS and BFS skeletons from memory. The goal is to make traversal automatic so the only new work is the problem-specific local action.
