# Problem Notes

This file is safe to read before attempting a problem. It focuses on recognition, questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Valid Parentheses

- **Pattern fit**:
  - This fits the stack side because the input is a sequence of nested symbols where the latest unmatched opening symbol is the one that matters next.
- **Clarifying questions**:
  - Can the string be empty?
  - Is the input limited to only `()[]{}`?
  - Should non-bracket characters ever appear?
  - Is the answer always a boolean?
- **Edge cases**:
  - Multiple bracket types side by side, such as `()[]{}`.
  - Crossed bracket types, such as `(]`.
  - A single leftover opening bracket, such as `[`.
  - A closing bracket before any opener.

### 02. Daily Temperatures

- **Pattern fit**:
  - This fits the stack side because each day may stay unresolved until a later day gives the nearest future warmer comparison.
- **Clarifying questions**:
  - Can the input be empty?
  - What are the minimum and maximum temperature values?
  - Should equal temperatures count as warmer?
  - Should the output preserve the same length and order as the input?
- **Edge cases**:
  - Mixed rises and drops, such as `[73, 74, 75, 71, 69, 72, 76, 73]`.
  - Strictly decreasing temperatures, such as `[30, 20, 10]`.
  - Equal temperatures before a warmer day, such as `[70, 70, 71]`.
  - A single day.

### 03. Binary Search

- **Pattern fit**:
  - This fits the binary search side because the input is already sorted and the question asks for the position of one target value.
- **Clarifying questions**:
  - Is the array always sorted in ascending order?
  - Can the array contain duplicate values?
  - What should be returned when the target is absent?
  - Can the array be empty?
- **Edge cases**:
  - Target present in a mixed negative and positive array, such as `[-1, 0, 3, 5, 9, 12]`.
  - Target absent from a sorted array.
  - A single-element array.
  - Target smaller than the first value or larger than the last value.

### 04. Search In Rotated Sorted Array

- **Pattern fit**:
  - This fits the binary search side because the array keeps sorted structure even though the sorted order may wrap around one pivot.
- **Clarifying questions**:
  - Is the array rotated at most once?
  - Can the array contain duplicate values?
  - What should be returned when the target is absent?
  - Can the array be empty?
- **Edge cases**:
  - Rotated input with the target after the pivot, such as `[4, 5, 6, 7, 0, 1, 2]`.
  - Rotated input where the target is absent.
  - Input that is not rotated, such as `[1, 2, 3, 4, 5]`.
  - A one-element array.

### 05. Koko Eating Bananas

- **Pattern fit**:
  - This fits the binary search side because the question asks for the minimum integer value that satisfies a time limit over a numeric range.
- **Clarifying questions**:
  - Are `piles` always positive integers?
  - What are the maximum pile size and maximum `h`?
  - Is `h` guaranteed to be at least the number of piles?
  - Should the returned speed be an integer?
- **Edge cases**:
  - Several small piles with extra time, such as `[3, 6, 7, 11]` and `h = 8`.
  - Large piles with tight time, such as `[30, 11, 23, 4, 20]` and `h = 5`.
  - Large piles with slightly more time, such as `[30, 11, 23, 4, 20]` and `h = 6`.
  - A single pile.
