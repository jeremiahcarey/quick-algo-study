# Trees Problem Notes

This file is safe to read before attempting a problem. It focuses on recognition, questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Invert Binary Tree

- **Pattern fit**:
  - The input is a binary tree root, and the requirement applies to every node in the tree.
  - There is no extra input collection to analyze; the structure itself is the main subject.
- **Clarifying questions**:
  - Can the input tree be empty?
  - Should the original nodes be reused, or should a new tree be returned?
  - Are node values relevant, or only the left/right shape?
  - Should missing children remain represented as `null`?
- **Edge cases**:
  - Empty tree.
  - Single-node tree.
  - Full multi-level tree like `[4, 2, 7, 1, 3, 6, 9]`.
  - Asymmetric tree with missing children like `[1, 2, null, 3]`.

### 02. Max Depth

- **Pattern fit**:
  - The statement asks for a property of a binary tree rooted at `root`.
  - Words like depth, longest path, root, and leaf point to DFS over tree structure.
- **Clarifying questions**:
  - Is depth counted in nodes or edges?
  - What should an empty tree count as?
  - Can the tree be highly skewed?
  - Are there limits on the number of nodes?
- **Edge cases**:
  - Empty tree.
  - Single-node tree.
  - Balanced example like `[3, 9, 20, null, null, 15, 7]`.
  - Skewed tree like `[1, null, 2, null, 3]`.

### 03. Same Tree

- **Pattern fit**:
  - The input has two binary tree roots, and the question is about matching tree shape and values.
  - The important clues are corresponding nodes, null positions, and tree structure.
- **Clarifying questions**:
  - Are two empty trees considered the same?
  - Should comparison use node values, object identity, or both?
  - Can values repeat within a tree?
  - Is either input allowed to be empty while the other is not?
- **Edge cases**:
  - Identical trees like `[1, 2, 3]` and `[1, 2, 3]`.
  - Different structure like `[1, 2]` and `[1, null, 2]`.
  - Different values like `[1, 2, 1]` and `[1, 1, 2]`.
  - Both trees empty.
  - One tree empty and one non-empty.

### 04. Level Order Traversal

- **Pattern fit**:
  - The phrase level by level is the direct BFS tell.
  - The requested output groups values by distance from the root, not as one flat collection.
- **Clarifying questions**:
  - Should the result include one inner list per level?
  - Should values within a level stay left to right?
  - What should be returned for an empty tree?
  - Should `null` placeholders appear in the output?
- **Edge cases**:
  - Empty tree.
  - Single-node tree.
  - Multi-level tree like `[3, 9, 20, null, null, 15, 7]`.
  - Skewed tree like `[1, null, 2, null, 3]`.
  - Tree with missing children inside a level.

### 05. Validate BST

- **Pattern fit**:
  - The statement names a binary search tree and gives strict ordering rules.
  - The wording says every left or right subtree, so the whole tree structure matters.
- **Clarifying questions**:
  - Are duplicate values allowed?
  - Is the ordering strict on both sides?
  - Is an empty tree possible?
  - What is the range of node values?
  - Should the tree be left unchanged?
- **Edge cases**:
  - Valid tree like `[2, 1, 3]`.
  - Descendant value that conflicts with the root side, like `[5, 1, 4, null, null, 3, 6]`.
  - Duplicate values like `[2, 2, 2]`.
  - Single-node tree.
  - Values near the minimum or maximum allowed input range.

### 06. Lowest Common Ancestor

- **Pattern fit**:
  - The input is a binary search tree plus two existing nodes in that tree.
  - Ancestor, descendant, and lowest common ancestor are tree-relationship clues.
- **Clarifying questions**:
  - Are `p` and `q` guaranteed to exist in the tree?
  - Can one target node be an ancestor of the other?
  - Can `p` and `q` be the same node?
  - Should the returned value be the node object or just its value?
  - Can the root be `null`?
- **Edge cases**:
  - Targets on different sides of the root.
  - One target is an ancestor of the other.
  - Both targets are on the same side, like `3` and `5` under `4`.
  - One target is the root.
  - Single-node tree.
