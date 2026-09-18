These notes are safe to read before attempting a problem. They focus on recognition, clarifying questions, and edge cases; solution hints live in `HINTS.md`.

### 01. Valid Palindrome

- **Pattern fit**:
  - The prompt asks whether a string reads the same forward and backward after ignoring some characters. That points to the two pointers pattern because positions naturally pair from opposite ends.
- **Clarifying questions**:
  - Which characters count as alphanumeric?
  - Should uppercase and lowercase letters be treated the same?
  - Can the string be empty or contain only punctuation and spaces?
  - Should digits follow the same rules as letters?
- **Edge cases**:
  - A sentence with punctuation, spaces, and mixed case.
  - A phrase that is close but not actually mirrored.
  - A string with no alphanumeric characters.
  - Single-character input.

### 02. 3Sum

- **Pattern fit**:
  - The prompt asks for value combinations that meet a numeric relationship, while the order of returned triplets does not matter. That is a common two pointers signal when values can be reasoned about by order.
- **Clarifying questions**:
  - Are duplicate triplets allowed in the output?
  - Does the order of triplets or values inside each triplet matter?
  - What are the minimum and maximum lengths of `nums`?
  - What value range can the numbers have?
  - Should the input array be left unchanged?
- **Edge cases**:
  - No triplet exists.
  - Many repeated zeroes.
  - Repeated negative and positive values around the same answer.
  - Fewer than three numbers.
  - Large positive and negative values together.

### 03. Best Time To Buy/Sell Stock

- **Pattern fit**:
  - The prompt is about two positions in a time-ordered array where the first day must come before the second. That makes it a two pointers style fit over a sequence rather than an unordered pair problem.
- **Clarifying questions**:
  - Is only one buy and one sell allowed?
  - Can buying and selling happen on the same day?
  - What should happen for an empty or one-day price list?
  - Are prices always non-negative integers?
- **Edge cases**:
  - Prices only decrease.
  - The lowest price appears after an earlier profitable-looking pair.
  - The best sell day is at the end.
  - Repeated equal prices.

### 04. Longest Substring Without Repeating Characters

- **Pattern fit**:
  - The prompt asks for the longest contiguous substring under a no-repeat rule. Contiguous range plus a changing validity condition is the sliding window pattern.
- **Clarifying questions**:
  - Should the function return the length or the substring itself?
  - What character set should be assumed: ASCII, Unicode, or something else?
  - Are uppercase and lowercase letters distinct?
  - Can the input string be empty?
  - Do spaces and punctuation count as characters?
- **Edge cases**:
  - A repeating pattern like `abcabcbb`.
  - All characters are the same.
  - Overlapping repeats such as `abba`.
  - Empty string.
  - Strings containing spaces or punctuation.

### 05. Minimum Window Substring

- **Pattern fit**:
  - The prompt asks for the shortest contiguous substring containing required characters. Shortest range plus containment requirements is a sliding window signal.
- **Clarifying questions**:
  - Do duplicate characters in `t` each need to be represented?
  - What should be returned if no valid substring exists?
  - If several shortest substrings exist, should the earliest one be returned?
  - Can `s` or `t` be empty?
  - Is matching case-sensitive?
- **Edge cases**:
  - A larger string with a small required set.
  - `t` requires more copies of a character than `s` visibly offers.
  - Duplicate required characters.
  - One-character strings.
  - Multiple candidate windows with similar length.
