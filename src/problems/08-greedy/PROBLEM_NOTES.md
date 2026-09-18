# Greedy Problem Notes

This file is safe to read before attempting a problem. It stays spoiler-light and avoids solution hints; use `HINTS.md` only when you are stuck.

### 01. Maximum Units On A Truck

- **Pattern fit**:
  - The goal is to maximize a total while spending one simple limited resource: truck box capacity.
  - Each choice has an independent value, so this is a good place to ask whether a greedy choice can be justified.
- **Clarifying questions**:
  - Can `boxTypes` be empty?
  - Can `truckSize` be `0`?
  - Are all `numberOfBoxes` and `unitsPerBox` values non-negative integers?
  - Is it allowed to load only some boxes from a given box type?
  - Should the original order of `boxTypes` be preserved?
- **Edge cases**:
  - Box types are listed in arbitrary order.
  - The truck capacity is smaller than the number of boxes in one type.
  - The truck capacity is larger than or equal to the total number of available boxes.
  - Multiple box types have the same values.
  - Box types with `0` boxes or `0` units.

### 02. Jump Game

- **Pattern fit**:
  - The question asks only whether the end is reachable, not which exact jumps to take.
  - Each position gives local movement information, so this is a good place to ask whether one greedy summary can capture progress.
- **Clarifying questions**:
  - Is `nums` guaranteed to contain at least one element?
  - Are jump lengths always non-negative integers?
  - Does starting on the last index count as reachable?
  - Can a jump go past the last index, or must it land exactly on it?
  - Are there constraints large enough that enumerating paths would be too slow?
- **Edge cases**:
  - A single-element array such as `[0]`.
  - A `0` appears before the last index.
  - The first value is `0` in a longer array.
  - Reachable progress depends on an early large jump.
  - Several small jumps appear before a blocking position.
