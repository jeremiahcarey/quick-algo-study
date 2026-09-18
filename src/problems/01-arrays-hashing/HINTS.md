# Arrays & Hashing Hints

Use this as a spoiler ladder: read Hint 1, then go back and try again. Only move to the next hint if you are still stuck.

### 01. Two Sum

- **Hint 1 — nudge**: For each number, what other number would make the target with it, and could that other number have appeared earlier?
- **Hint 2 — technique**: Use a `Map` from value to index while scanning once. Target `O(n)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Create an empty `Map<number, number>`.
  2. Walk through `nums` by index.
  3. For each value, compute `target - value`.
  4. If that needed value is already in the map, return its stored index and the current index.
  5. Otherwise, store the current value with its index and continue.

### 02. Contains Duplicate

- **Hint 1 — nudge**: While reading values left to right, what would let you know immediately that the array is not fully distinct?
- **Hint 2 — technique**: Use a `Set` of seen values. Target `O(n)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Create an empty `Set<number>`.
  2. Scan each value in `nums`.
  3. If the value has already been seen, return `true`.
  4. Otherwise, record it and keep scanning.
  5. If the scan finishes without finding a repeat, return `false`.

### 03. Group Anagrams

- **Hint 1 — nudge**: What representation would be identical for two strings that use the same letters, regardless of their original order?
- **Hint 2 — technique**: Use a canonical string key and a `Map` from key to group. Sorting each word gives `O(n * L log L)` time and `O(n * L)` space; a fixed character-count key can target `O(n * L)` time.
- **Hint 3 — approach outline**:
  1. Create an empty `Map<string, string[]>`.
  2. For each string, build a stable key that is the same for anagrams.
  3. Get the group for that key, creating one if needed.
  4. Add the original string to that group.
  5. Return all groups from the map.

### 04. Top K Frequent Elements

- **Hint 1 — nudge**: Can you separate the problem into first knowing how often each value appears, then choosing the values with the largest totals?
- **Hint 2 — technique**: Use a frequency `Map`, then bucket values by count. Target `O(n)` time and `O(n)` space.
- **Hint 3 — approach outline**:
  1. Count how many times each number appears.
  2. Create buckets where bucket index means frequency.
  3. Put each distinct number into the bucket for its frequency.
  4. Walk buckets from highest frequency down.
  5. Collect values until you have `k`, then return them.
