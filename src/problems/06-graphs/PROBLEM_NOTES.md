# Graphs Problem Notes

These notes are safe to read before attempting a problem. They focus on recognition, questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Number Of Islands

- **Pattern fit**:
  - The prompt describes a grid where neighboring cells form larger regions.
  - The question asks how many separate land groups exist, so the important relationship is connectivity between cells.
  - The horizontal/vertical wording tells you to treat the grid as a graph with a specific neighbor rule.
- **Clarifying questions**:
  - Do diagonal land cells count as connected?
  - Can the input grid be empty?
  - Is it acceptable to mutate the grid while solving?
  - Are all rows guaranteed to have the same length?
- **Edge cases**:
  - One large connected block of land.
  - Multiple separated land groups.
  - Land cells that touch only diagonally.
  - A grid with no land.

### 02. Clone Graph

- **Pattern fit**:
  - The input is an object graph where each node has neighbor references.
  - The graph is undirected, so following neighbors can lead back to a node already seen.
  - The output must preserve relationships, not just node values.
- **Clarifying questions**:
  - Can the input node be `null`?
  - Is the graph always connected from the given node?
  - Are node values guaranteed to be unique?
  - Can a node have no neighbors?
  - Can there be self-edges or repeated neighbor entries?
- **Edge cases**:
  - An empty graph.
  - A single isolated node.
  - A connected graph where neighbors point back to earlier nodes.
  - Distinct nodes that share the same value.

### 03. Course Schedule

- **Pattern fit**:
  - Prerequisites are directed relationships between courses.
  - The question asks whether all items can be completed under those relationships.
  - A chain of dependencies can loop back on itself, which is exactly where graph traversal matters.
- **Clarifying questions**:
  - Can `numCourses` be zero?
  - Are prerequisite pairs always valid course indexes?
  - Can duplicate prerequisite pairs appear?
  - Can a course list include disconnected prerequisite groups?
  - Does `[course, prerequisite]` mean the second item must come first?
- **Edge cases**:
  - A course with no prerequisites.
  - A simple two-course dependency.
  - A two-course dependency loop.
  - A longer dependency loop involving more than two courses.
  - Disconnected groups of courses.
