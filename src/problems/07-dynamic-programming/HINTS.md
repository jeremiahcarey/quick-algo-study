# Dynamic Programming Hints

Use these as a spoiler ladder: read Hint 1, then go back and try again. Only move to the next hint if you are still stuck.

### 01. Climbing Stairs

- **Hint 1 — nudge**: If you are standing on the top step, what could your final move have been?
- **Hint 2 — technique**: Use 1D linear DP where `dp[i]` means the number of ways to reach step `i`. Target `O(n)` time and `O(n)` space, or `O(1)` extra space with rolling values.
- **Hint 3 — approach outline**:
  1. Define the count for step `0` and step `1` as base cases.
  2. For each later step, combine the ways to arrive from one step below and two steps below.
  3. In expression form, use `dp[i] = dp[i - 1] + dp[i - 2]`.
  4. Return the count for step `n`.

### 02. House Robber

- **Hint 1 — nudge**: For each house, what changes if you rob it versus skip it?
- **Hint 2 — technique**: Use 1D linear choice DP where `dp[i]` means the best amount from houses through index `i`. Target `O(n)` time and `O(n)` space, or `O(1)` extra space with two running values.
- **Hint 3 — approach outline**:
  1. Handle the empty and single-house cases first.
  2. At each house, compare skipping it with robbing it plus the best total before its neighbor.
  3. In expression form, use `dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])`.
  4. Return the best total after the last house.

### 03. Coin Change

- **Hint 1 — nudge**: If the last coin has value `coin`, what smaller amount had to be solved just before it?
- **Hint 2 — technique**: Use knapsack-style amount DP where `dp[a]` means the fewest coins needed to make exact amount `a`. Target `O(amount * coins.length)` time and `O(amount)` space.
- **Hint 3 — approach outline**:
  1. Create entries for every amount from `0` through the target.
  2. Set amount `0` as already solved and all other amounts as unreachable.
  3. For each amount, try every coin that does not overshoot it.
  4. If the smaller amount is reachable, update with `dp[a] = min(dp[a], dp[a - coin] + 1)`.
  5. Return `-1` if the target remains unreachable; otherwise return its stored count.

### 04. Longest Increasing Subsequence

- **Hint 1 — nudge**: If `nums[i]` is the final value in a valid sequence, which earlier values are allowed to come before it?
- **Hint 2 — technique**: Use subsequence DP where `dp[i]` means the longest increasing subsequence ending at index `i`. Target `O(n²)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Start each index with length `1`, because a single value is a valid sequence.
  2. For every `i`, scan earlier indexes `j < i`.
  3. When `nums[j] < nums[i]`, consider extending the sequence ending at `j`.
  4. In expression form, update with `dp[i] = max(dp[i], dp[j] + 1)`.
  5. Return the largest value in `dp`.

### 05. Word Break

- **Hint 1 — nudge**: If the string can be split, where might the final dictionary word start?
- **Hint 2 — technique**: Use string segmentation DP where `dp[i]` means `s.slice(0, i)` can be segmented into dictionary words. Target `O(n²)` substring checks and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Put the dictionary words in a `Set` for quick membership checks.
  2. Mark the empty prefix as segmentable.
  3. For each end position, try every earlier start position.
  4. If the earlier prefix is segmentable and `s.slice(start, end)` is in the dictionary, mark this end as segmentable.
  5. Return whether the full string length is marked segmentable.

### 06. Longest Common Subsequence

- **Hint 1 — nudge**: When looking at the last characters of two prefixes, what changes if they match versus if they do not?
- **Hint 2 — technique**: Use a 2D two-string table where `dp[i][j]` means the longest common subsequence length for prefixes `text1.slice(0, i)` and `text2.slice(0, j)`. Target `O(mn)` time and `O(mn)` space, reducible to `O(min(m, n))` space.
- **Hint 3 — approach outline**:
  1. Build a table with one extra row and column for empty prefixes.
  2. Leave the empty-prefix row and column at zero.
  3. If the current characters match, extend the diagonal smaller answer by one.
  4. Otherwise, take the better answer from dropping one character from either string.
  5. In expression form, match uses `dp[i][j] = dp[i - 1][j - 1] + 1`; mismatch uses `max(dp[i - 1][j], dp[i][j - 1])`.
  6. Return the bottom-right cell.
