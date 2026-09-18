# Trees Hints

Use this as a spoiler ladder: read Hint 1, go back and try again, and only escalate if you are still stuck. Hint 3 gives an outline, not full code.

### 01. Invert Binary Tree

- **Hint 1 — nudge**: What must be true about each node's left and right children in the final tree?
- **Hint 2 — technique**: Use recursive DFS with a local child swap at each node. Target `O(n)` time and `O(h)` recursion space.
- **Hint 3 — approach outline**:
  1. If the current node is `null`, return `null`.
  2. Exchange the current node's left and right children.
  3. Apply the same work to the current node's children.
  4. Return the original root reference.

### 02. Max Depth

- **Hint 1 — nudge**: If you already knew the depth of each child subtree, how would you get the depth at the current node?
- **Hint 2 — technique**: Use recursive DFS that returns subtree height. Target `O(n)` time and `O(h)` recursion space.
- **Hint 3 — approach outline**:
  1. Define the depth of `null` as `0`.
  2. Ask the left subtree for its depth.
  3. Ask the right subtree for its depth.
  4. Return one node plus the larger child depth.

### 03. Same Tree

- **Hint 1 — nudge**: At any position, what are all the ways two corresponding nodes can match or fail to match?
- **Hint 2 — technique**: Use recursive DFS on both trees in lockstep. Target `O(n)` time and `O(h)` recursion space.
- **Hint 3 — approach outline**:
  1. If both current nodes are `null`, this position matches.
  2. If only one current node is `null`, the trees differ.
  3. If both nodes exist but their values differ, the trees differ.
  4. Check the left pair and the right pair the same way.

### 04. Level Order Traversal

- **Hint 1 — nudge**: How can you make sure values from one level are grouped before moving to the next level?
- **Hint 2 — technique**: Use BFS with a queue and process one level size at a time. Target `O(n)` time and `O(w)` queue space, plus output.
- **Hint 3 — approach outline**:
  1. Return an empty result for an empty root.
  2. Put the root in a queue.
  3. For each loop, record the current queue length as the level size.
  4. Remove exactly that many nodes, collect their values, and append their children.
  5. Add the collected level to the result.

### 05. Validate BST

- **Hint 1 — nudge**: What information from ancestors does a node need before you can decide whether its value is allowed?
- **Hint 2 — technique**: Use DFS carrying lower and upper bounds down the tree. Target `O(n)` time and `O(h)` recursion space.
- **Hint 3 — approach outline**:
  1. Start at the root with no lower or upper bound.
  2. At each node, reject values that are not strictly inside the current bounds.
  3. For the left child, tighten the upper bound to the current value.
  4. For the right child, tighten the lower bound to the current value.
  5. A `null` subtree is valid.

### 06. Lowest Common Ancestor

- **Hint 1 — nudge**: In a BST, what does it mean if both target values are smaller than the current node, both are larger, or they split?
- **Hint 2 — technique**: Use BST-guided descent from the root. Target `O(h)` time and `O(1)` space with an iterative loop.
- **Hint 3 — approach outline**:
  1. Start at the root.
  2. If both target values are less than the current value, move left.
  3. If both target values are greater than the current value, move right.
  4. Otherwise, the current node is where the paths meet or one target is the current node.
  5. Return that node.
