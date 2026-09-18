Use these hints as a ladder: read Hint 1, go back and try again, and only escalate if you are still stuck. Hint 3 gives an outline, not full code.

### 01. Valid Palindrome

- **Hint 1 — nudge**: Which characters should be compared with each other if the cleaned string must read the same from both directions?
- **Hint 2 — technique**: Use converging two pointers while skipping non-alphanumeric characters. Target O(n) time and O(1) extra space.
- **Hint 3 — approach outline**:
  1. Start one index at the beginning of `s` and one at the end.
  2. Move each index past characters that should not participate.
  3. Compare the remaining characters in a normalized form.
  4. Return false on the first mismatch.
  5. Move inward until the indexes cross, then return true.

### 02. 3Sum

- **Hint 1 — nudge**: If one number is fixed, what relationship must the other two numbers satisfy?
- **Hint 2 — technique**: Sort the array, then use a fixed anchor plus a two-pointer pair search. Target O(n²) time and O(1) extra space excluding the output.
- **Hint 3 — approach outline**:
  1. Sort `nums` in ascending order.
  2. Loop over each possible anchor value, skipping anchors that repeat the previous anchor.
  3. For each anchor, place one pointer after it and one at the end.
  4. Compare the pair sum with the value needed to reach zero.
  5. Record matching triplets, then move past repeated pair values before continuing.

### 03. Best Time To Buy/Sell Stock

- **Hint 1 — nudge**: For any possible sell day, what single fact about earlier days would tell you the best profit ending there?
- **Hint 2 — technique**: Use a single left-to-right pass with a best-buy-so-far pointer/state. Target O(n) time and O(1) extra space.
- **Hint 3 — approach outline**:
  1. Keep the lowest price seen before or at the current day.
  2. Treat each current price as a possible sell price.
  3. Update the best profit using current price minus the lowest earlier price.
  4. Update the lowest price after considering the current day.
  5. Return zero if no positive profit was found.

### 04. Longest Substring Without Repeating Characters

- **Hint 1 — nudge**: When a repeated character appears, how far must the start of the current substring move so the substring becomes valid again?
- **Hint 2 — technique**: Use sliding window with last-seen indexes. Target O(n) time and O(min(n, character set)) space.
- **Hint 3 — approach outline**:
  1. Keep `left` as the start of the current window and scan `right` across the string.
  2. Store the most recent index where each character appeared.
  3. If the current character already appears inside the current window, move `left` just after that previous index.
  4. Save the current character's index.
  5. Update the best length with `right - left + 1`.

### 05. Minimum Window Substring

- **Hint 1 — nudge**: How can you know when the current substring has enough of every required character, including repeats?
- **Hint 2 — technique**: Use sliding window with required character counts and a missing counter. Target O(|s| + |t|) time and O(unique characters in `s` and `t`) space.
- **Hint 3 — approach outline**:
  1. Count the characters required by `t` and track how many required characters are still missing.
  2. Expand the right side of the window through `s`, updating counts and the missing total.
  3. When nothing is missing, record the window if it is the smallest so far.
  4. Shrink from the left while the window remains valid, updating counts as characters leave.
  5. Return the best recorded substring, or an empty string if none was recorded.
