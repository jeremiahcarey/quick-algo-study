# Bonus Gap-Fillers Problem Notes

These notes are safe to read before attempting a problem. They focus on recognition, questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Rotate Image

- **Pattern fit**:
  - The prompt describes an image as an `n x n` matrix and says the original matrix must be changed directly, which points to In-Place Matrix Transforms.
- **Clarifying questions**:
  - Is the matrix always square, or can rectangular inputs appear?
  - Is changing the input required, and should the function return anything?
  - Are there minimum or maximum matrix sizes to account for?
  - Are all rows guaranteed to have the same length?
- **Edge cases**:
  - A `1 x 1` matrix.
  - A small odd-sized matrix such as `3 x 3`.
  - An even-sized matrix such as `4 x 4`.
  - Values that are not ordered or unique.

### 02. Flatten Deeply Nested Array

- **Pattern fit**:
  - The input type can contain numbers or arrays of the same type, and the behavior depends on nesting depth, which points to Nested-Structure Recursion.
- **Clarifying questions**:
  - Are elements only numbers and nested arrays?
  - Can `n` be `0`, negative, or larger than the actual nesting depth?
  - Should the original array be preserved or can it be changed?
  - Should empty nested arrays be kept or removed?
  - Are there any library restrictions I should follow?
- **Edge cases**:
  - `n = 0`.
  - One level of nesting mixed with plain numbers.
  - Multiple nested levels with a requested depth below the deepest level.
  - Empty arrays at the outer or inner levels.

### 03. Product Of Array Except Self

- **Pattern fit**:
  - Every output position depends on values on both sides of the current index, and the prompt rules out division, which points to Prefix And Suffix Passes.
- **Clarifying questions**:
  - Is division allowed, or must it be avoided?
  - Can the input contain zero, multiple zeros, or negative numbers?
  - Are products guaranteed to fit in JavaScript's safe number range?
  - Should the returned array be new, or can the input be reused?
- **Edge cases**:
  - A standard all-positive array.
  - An array containing one zero.
  - An array containing two zeros.
  - Negative values mixed with positive values.

### 04. Merge Intervals

- **Pattern fit**:
  - The input is a list of `[start, end]` ranges and the task is about overlap, which points to Intervals.
- **Clarifying questions**:
  - Are intervals guaranteed to be sorted?
  - Do intervals that touch at one endpoint count as overlapping?
  - Can intervals be empty, reversed, or contain negative endpoints?
  - Should the result be sorted?
  - Is it okay to mutate the input interval arrays?
- **Edge cases**:
  - Intervals that clearly overlap.
  - Intervals that only share an endpoint.
  - Unsorted input intervals.
  - Already separate intervals with gaps between them.

### 05. Subsets

- **Pattern fit**:
  - The prompt asks for all possible subsets of unique values, including both smallest and largest choices, which points to Backtracking And Subsets.
- **Clarifying questions**:
  - Are input values always unique?
  - Does subset order matter?
  - Does the order of numbers inside each subset matter?
  - Can the input be empty?
  - Can values be negative or zero?
- **Edge cases**:
  - An empty input array.
  - A three-number input.
  - Negative numbers.
  - A single-element input.
