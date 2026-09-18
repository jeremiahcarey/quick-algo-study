# Arrays & Hashing Problem Notes

These notes are safe to read before attempting a problem. They focus on recognition, clarifying questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Two Sum

- **Pattern fit**:
  - The prompt is about finding two entries in one array whose values relate to a target.
  - It asks for indexes, so the identity of each position matters, not just the values.
  - The statement says exactly one valid answer exists and the answer may be in any order.
- **Clarifying questions**:
  - Is there always exactly one valid answer?
  - Can the same numeric value be used from two different positions?
  - May the same index ever be used twice?
  - Can numbers be negative, zero, or very large?
  - Can the returned indexes be in either order?
- **Edge cases**:
  - A pair appears in the small example shape like `[2, 7, 11, 15]` with target `9`.
  - The two values are equal, such as `[3, 3]` with target `6`.
  - A target could appear to match one value with itself unless positions are checked.
  - The matching positions are not adjacent.

### 02. Contains Duplicate

- **Pattern fit**:
  - The prompt asks whether any value appears at least twice.
  - It is a yes/no question about repeated values, not about where the repeat appears.
  - The statement contrasts "appears at least twice" with "every value is distinct."
- **Clarifying questions**:
  - Can the input be empty or have one element?
  - Are negative numbers and zero allowed?
  - Does the array need to remain unchanged?
  - Is the answer only boolean, or should repeated values be reported?
- **Edge cases**:
  - A repeated value appears after other distinct values, such as `[1, 2, 3, 1]`.
  - Every value is unique, such as `[1, 2, 3, 4]`.
  - Negative numbers and zero are present.
  - The repeated value is negative.

### 03. Group Anagrams

- **Pattern fit**:
  - The prompt asks for strings to be partitioned into groups by shared letters.
  - The order of groups and the order inside each group do not matter.
  - Each input string must appear in exactly one group.
- **Clarifying questions**:
  - Are strings limited to lowercase English letters?
  - Can strings be empty?
  - Should duplicate strings remain as separate entries?
  - Does output order matter at either level?
  - Should capitalization or Unicode characters be treated specially?
- **Edge cases**:
  - Several words share the same letters, as in `"eat"`, `"tea"`, and `"ate"`.
  - A single empty string is present.
  - Strings have the same length but different letters, such as `"ab"` and `"cd"`.
  - A word has no matching partner.

### 04. Top K Frequent Elements

- **Pattern fit**:
  - The prompt asks for values based on how often they appear.
  - It returns only `k` values, not all values.
  - The answer may be returned in any order, so membership in the result matters more than ordering.
- **Clarifying questions**:
  - Is `k` always between `1` and the number of distinct values?
  - Can multiple values have the same frequency near the cutoff?
  - Does the output order matter?
  - Are negative numbers and zero allowed?
  - Should duplicate values appear once or multiple times in the result?
- **Edge cases**:
  - A common example shape like `[1, 1, 1, 2, 2, 3]` with `k = 2`.
  - The input has a single distinct value.
  - Negative numbers appear alongside positive numbers.
  - More than one value has a high frequency.
