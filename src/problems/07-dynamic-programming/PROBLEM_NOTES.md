# Dynamic Programming Problem Notes

These notes are safe to read before attempting a problem. They focus on recognizing the fit and planning questions; solution hints live in `HINTS.md`.

### 01. Climbing Stairs

- **Pattern fit**:
  - The prompt asks for a number of distinct ways, not one actual path.
  - Each larger staircase is naturally related to smaller staircase sizes, so dynamic programming is a strong fit.
- **Clarifying questions**:
  - What is the minimum possible value of `n`?
  - Can `n` be zero, and if so how should that be interpreted?
  - Are the only allowed moves exactly 1 or 2 steps?
  - How large can `n` get?
- **Edge cases**:
  - `n = 2`
  - `n = 3`
  - A larger value such as `n = 10`
  - The smallest allowed staircase size

### 02. House Robber

- **Pattern fit**:
  - The prompt asks for the maximum total under an adjacency rule.
  - Local choices affect what remains available later, so dynamic programming fits better than grabbing the largest visible value.
- **Clarifying questions**:
  - Can the input array be empty?
  - Are all house values non-negative?
  - Are the first and last houses considered adjacent, or is the street linear?
  - Should the function return only the amount, not the chosen house indexes?
- **Edge cases**:
  - An empty street
  - A short street with one or two houses
  - Values where a locally tempting house is not part of the best total
  - A case like `[1, 2, 3, 1]`
  - A case like `[2, 7, 9, 3, 1]`

### 03. Coin Change

- **Pattern fit**:
  - The prompt asks for the fewest coins needed to reach an exact amount.
  - Many attempts share the same remaining amounts, which points toward dynamic programming.
- **Clarifying questions**:
  - Can each coin denomination be reused any number of times?
  - Can `amount` be zero?
  - Are coin values always positive integers?
  - What should happen if the amount cannot be made exactly?
  - Can the coin list be empty?
- **Edge cases**:
  - Amount zero
  - A target that cannot be formed, such as odd amount with only coin `2`
  - A standard mixed-denomination case like coins `[1, 2, 5]` and amount `11`
  - Coin denominations larger than the target amount

### 04. Longest Increasing Subsequence

- **Pattern fit**:
  - The prompt asks for the longest length while preserving original order.
  - Each position can relate to many earlier positions, which is a common dynamic programming signal.
- **Clarifying questions**:
  - Does "increasing" mean strictly increasing?
  - Can the array contain duplicate values?
  - Can the array be empty?
  - Should the function return only the length, not the actual sequence?
  - Are negative numbers allowed?
- **Edge cases**:
  - A mixed array like `[10, 9, 2, 5, 3, 7, 101, 18]`
  - Duplicate values in the input
  - All values equal, such as `[7, 7, 7, 7, 7]`
  - Already increasing values
  - Fully descending values

### 05. Word Break

- **Pattern fit**:
  - The prompt asks whether a full string can be built from valid dictionary pieces.
  - Different split attempts can overlap in the remaining string work, which makes dynamic programming a good fit.
- **Clarifying questions**:
  - Can dictionary words be reused?
  - Can `s` be empty?
  - Can `wordDict` be empty?
  - Are dictionary words case-sensitive?
  - Should every character in `s` be covered by the segmentation?
- **Edge cases**:
  - A simple segmentable string like `"leetcode"`
  - A case that requires reusing a word, such as `"applepenapple"`
  - A string with plausible partial pieces but no full segmentation
  - Dictionary entries that overlap, such as shorter and longer words sharing prefixes

### 06. Longest Common Subsequence

- **Pattern fit**:
  - The prompt asks for the longest length shared by two strings while preserving order.
  - Allowing skipped characters creates many repeated smaller comparisons, so dynamic programming fits.
- **Clarifying questions**:
  - Can either string be empty?
  - Is matching case-sensitive?
  - Should the function return only the length, not the actual characters?
  - Do matched characters need to be contiguous?
  - What are the maximum string lengths?
- **Edge cases**:
  - Strings with matching characters that require skips, such as `"abcde"` and `"ace"`
  - Identical strings
  - Strings with no shared characters
  - One empty string
  - Repeated characters in one or both strings
