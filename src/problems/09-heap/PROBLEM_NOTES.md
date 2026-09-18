# Problem Notes

This file is safe to read before attempting a problem. It contains no solution hints; those live in `HINTS.md`.

### 01. Kth Largest Element In An Array

- **Pattern fit**:
  - The prompt asks for a ranked extreme: the `k`th largest value rather than a transformed array or yes/no property.
  - The wording fits heap / priority queue territory because it focuses on access to a priority-ranked value.
  - The note that duplicates count as sorted positions is part of recognizing exactly what rank means.
- **Clarifying questions**:
  - Do duplicate values count as separate positions, or should the answer be the `k`th distinct value?
  - Is `k` always between `1` and `nums.length`?
  - What value ranges should I expect, including negatives and zero?
  - Am I allowed to mutate `nums`, or should I preserve the input order and contents?
  - What input size should I optimize for?
- **Edge cases**:
  - Arrays with duplicate values, such as repeated `2`, `3`, or `5` entries.
  - `k` equal to `1`.
  - Inputs containing negative numbers and zero.
  - Small unsorted arrays with mixed low and high values.
