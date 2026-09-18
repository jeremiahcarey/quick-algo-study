# Graphs Hints

Use this as a spoiler ladder: read Hint 1, then go back and try again. Only move to the next hint if you are still stuck.

### 01. Number Of Islands

- **Hint 1 — nudge**: When you find one land cell, what does that tell you about every land cell connected to it?
- **Hint 2 — technique**: Run DFS or BFS from each unvisited land cell, marking cells as visited. Target `O(rows * cols)` time and `O(rows * cols)` space.
- **Hint 3 — approach outline**:
  1. Scan every cell in the grid.
  2. When a cell is land and has not already been visited, count a new island.
  3. Traverse from that cell through horizontal and vertical land neighbors.
  4. Mark every reached land cell so later scans do not count it again.
  5. Return the total count after the scan finishes.

### 02. Clone Graph

- **Hint 1 — nudge**: If a neighbor points back to a node you already copied, how can you reuse the existing copy instead of creating another one?
- **Hint 2 — technique**: Use DFS or BFS with a `Map<GraphNode, GraphNode>` from original nodes to cloned nodes. Target `O(V + E)` time and `O(V)` space.
- **Hint 3 — approach outline**:
  1. Return `null` for a missing input node.
  2. Create a clone for the starting node and store the original-to-clone relationship.
  3. Traverse original nodes through their neighbors.
  4. For each neighbor, create its clone only if it has not been created yet.
  5. Append cloned neighbors to the current cloned node so the final structure matches the original graph.
  6. Return the clone associated with the starting node.

### 03. Course Schedule

- **Hint 1 — nudge**: What kind of prerequisite chain would make it impossible to choose a first valid course?
- **Hint 2 — technique**: Use DFS cycle detection with visiting/done states, or BFS topological ordering with indegrees. Target `O(numCourses + prerequisites.length)` time and `O(numCourses + prerequisites.length)` space.
- **Hint 3 — approach outline**:
  1. Build a directed graph from each prerequisite to the courses that depend on it.
  2. Track each course's visit state: unseen, currently in the path, or fully checked.
  3. Start a traversal from every course that has not been checked yet.
  4. If traversal reaches a course already in the current path, the dependencies contain a cycle.
  5. Mark a course fully checked only after all courses depending on it are checked.
  6. Return true only if no traversal finds a cycle.
