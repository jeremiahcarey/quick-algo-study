# Mechanics Guide: Linked Lists, Trees, And Graphs

Arrays can feel easier for most working developers because you already know how to loop over them. Linked lists, trees, and graphs often feel harder for a different reason: the idea may be simple, but the traversal mechanics are unfamiliar.

The fix is to memorize a few small skeletons. Once you can type these from memory, most beginner/intermediate linked-list, tree, and graph problems become "use the skeleton, then add the problem-specific line."

## Linked Lists

Most linked-list work starts with plain traversal:

```ts
let curr = head;

while (curr !== null) {
  curr = curr.next;
}
```

The two templates to own are reversal and fast/slow pointers.

### Reversal

Use this when the problem asks you to reverse a list or reverse part of a list.

```ts
let prev: ListNode | null = null;
let curr = head;

while (curr !== null) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}

return prev;
```

The key move is saving `next` before changing `curr.next`.

### Fast And Slow

Use this for cycle detection, finding the middle, or splitting a list.

```ts
let slow = head;
let fast = head;

while (fast !== null && fast.next !== null) {
  slow = slow!.next;
  fast = fast.next.next;
}
```

If `fast` ever catches `slow` after moving, there is a cycle. If `fast` reaches null, there is no cycle.

### Dummy Head

Use a dummy node when building or merging a list so you do not special-case the first node.

```ts
const dummy = new ListNode();
let tail = dummy;

while (/* still have nodes to append */) {
  tail.next = /* next node */;
  tail = tail.next;
}

return dummy.next;
```

## Trees

Most tree problems are DFS with a base case first.

```ts
function dfs(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  dfs(node.left);
  dfs(node.right);
}
```

Variations usually add one local action:

- Max Depth: return a number from each subtree.
- Same Tree: compare two nodes at the same time.
- Invert Binary Tree: swap children before or after visiting them.
- Validate BST: carry lower and upper bounds down the recursion.

When the problem says "level," reach for BFS:

```ts
if (root === null) {
  return [];
}

const queue: TreeNode[] = [root];

while (queue.length > 0) {
  const node = queue.shift()!;

  if (node.left !== null) {
    queue.push(node.left);
  }

  if (node.right !== null) {
    queue.push(node.right);
  }
}
```

For level-order output, process one queue length at a time so each level becomes its own group.

## Graphs

A graph traversal is tree traversal plus a `visited` set. The set prevents cycles from sending you around forever.

### DFS

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

### BFS

```ts
const visited = new Set<string>();
const queue = [start];
visited.add(start);

while (queue.length > 0) {
  const node = queue.shift()!;

  for (const neighbor of neighbors(node)) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}
```

For grid problems like Number of Islands, each cell is a graph node and its neighbors are usually up, down, left, and right.

```ts
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
```

For Clone Graph, use a `Map` from original node to cloned node. For Course Schedule, the same traversal idea gets one extra concept: detecting dependency cycles.

## How To Practice This

Before solving the actual problems, spend a few minutes typing these skeletons from memory:

- linked-list traversal
- linked-list reversal
- fast/slow pointers
- tree DFS
- tree BFS
- graph DFS or BFS with `visited`

The goal is not to memorize every solution. The goal is to always have a starting shape when the data structure appears.
