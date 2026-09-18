# Pattern Study Plan

This is a compact, general-purpose study system for common LeetCode-style interview patterns: 36 core problems plus 5 optional bonus gap-fillers, ordered by pattern. It is meant to cover the main ground, not to be a complete problem bank, and it is not tied to a fixed timeline.

Work top to bottom. Spend 20-25 minutes attempting a problem; if you are stuck, open the category's `HINTS.md` and read one hint at a time. After using hints or an outside explanation, come back and re-code the solution yourself from a blank function body.

Each category folder has three study files, ordered by spoiler level:

- `PATTERN_GUIDE.md`: what the pattern is, how to spot it, and its core mechanics. Read before starting a group.
- `PROBLEM_NOTES.md`: per-problem interview notes (pattern recognition, clarifying questions, edge cases). Safe to read before attempting.
- `HINTS.md`: graduated per-problem hints, from a nudge to an approach outline. Read only when stuck, one hint at a time.

Before the linked-list, tree, and graph groups, practice typing the traversal skeletons in those pattern guides from memory.

Each checklist item includes the command to run that problem's tests and the source file to edit. Mark items complete so `npm run problem -- next` can find your next problem.

## Suggested Pacing

There is no required schedule. A comfortable full pass takes about 8-12 weeks:

- Cover one pattern group every one to two weeks, roughly 3-5 problems per week at 30-60 minutes per day.
- End each group by re-doing any missed problems from a blank function body.
- Reserve the last week or two for mixed review and mock timing.

The plan also compresses fine: at 2-3 problems per day, the core track fits in about 2-3 weeks.

## Arrays & Hashing

Study files: `src/problems/01-arrays-hashing/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 01. Two Sum: `npm run problem -- 01-01` (`src/problems/01-arrays-hashing/01-two-sum.ts`)
- [ ] 02. Contains Duplicate: `npm run problem -- 01-02` (`src/problems/01-arrays-hashing/02-contains-duplicate.ts`)
- [ ] 03. Group Anagrams: `npm run problem -- 01-03` (`src/problems/01-arrays-hashing/03-group-anagrams.ts`)
- [ ] 04. Top K Frequent Elements: `npm run problem -- 01-04` (`src/problems/01-arrays-hashing/04-top-k-frequent.ts`)

## Two Pointers & Sliding Window

Study files: `src/problems/02-two-pointers-sliding-window/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 05. Valid Palindrome: `npm run problem -- 02-01` (`src/problems/02-two-pointers-sliding-window/01-valid-palindrome.ts`)
- [ ] 06. 3Sum: `npm run problem -- 02-02` (`src/problems/02-two-pointers-sliding-window/02-three-sum.ts`)
- [ ] 07. Best Time to Buy/Sell Stock: `npm run problem -- 02-03` (`src/problems/02-two-pointers-sliding-window/03-best-time-to-buy-sell-stock.ts`)
- [ ] 08. Longest Substring Without Repeating Characters: `npm run problem -- 02-04` (`src/problems/02-two-pointers-sliding-window/04-longest-substring-without-repeating.ts`)
- [ ] 09. Minimum Window Substring: `npm run problem -- 02-05` (`src/problems/02-two-pointers-sliding-window/05-minimum-window-substring.ts`)

## Stack & Binary Search

Study files: `src/problems/03-stack-binary-search/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 10. Valid Parentheses: `npm run problem -- 03-01` (`src/problems/03-stack-binary-search/01-valid-parentheses.ts`)
- [ ] 11. Daily Temperatures: `npm run problem -- 03-02` (`src/problems/03-stack-binary-search/02-daily-temperatures.ts`)
- [ ] 12. Binary Search: `npm run problem -- 03-03` (`src/problems/03-stack-binary-search/03-binary-search.ts`)
- [ ] 13. Search in Rotated Sorted Array: `npm run problem -- 03-04` (`src/problems/03-stack-binary-search/04-search-rotated.ts`)
- [ ] 14. Koko Eating Bananas: `npm run problem -- 03-05` (`src/problems/03-stack-binary-search/05-koko-eating-bananas.ts`)

## Linked Lists

Study files: `src/problems/04-linked-lists/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 15. Reverse a Linked List: `npm run problem -- 04-01` (`src/problems/04-linked-lists/01-reverse-list.ts`)
- [ ] 16. Merge Two Sorted Lists: `npm run problem -- 04-02` (`src/problems/04-linked-lists/02-merge-two-lists.ts`)
- [ ] 17. Linked List Cycle: `npm run problem -- 04-03` (`src/problems/04-linked-lists/03-linked-list-cycle.ts`)
- [ ] 18. Reorder List: `npm run problem -- 04-04` (`src/problems/04-linked-lists/04-reorder-list.ts`)

## Trees

Study files: `src/problems/05-trees/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 19. Invert Binary Tree: `npm run problem -- 05-01` (`src/problems/05-trees/01-invert-binary-tree.ts`)
- [ ] 20. Max Depth: `npm run problem -- 05-02` (`src/problems/05-trees/02-max-depth.ts`)
- [ ] 21. Same Tree: `npm run problem -- 05-03` (`src/problems/05-trees/03-same-tree.ts`)
- [ ] 22. Level Order Traversal: `npm run problem -- 05-04` (`src/problems/05-trees/04-level-order-traversal.ts`)
- [ ] 23. Validate BST: `npm run problem -- 05-05` (`src/problems/05-trees/05-validate-bst.ts`)
- [ ] 24. Lowest Common Ancestor: `npm run problem -- 05-06` (`src/problems/05-trees/06-lowest-common-ancestor.ts`)

## Graphs

Study files: `src/problems/06-graphs/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 25. Number of Islands: `npm run problem -- 06-01` (`src/problems/06-graphs/01-number-of-islands.ts`)
- [ ] 26. Clone Graph: `npm run problem -- 06-02` (`src/problems/06-graphs/02-clone-graph.ts`)
- [ ] 27. Course Schedule: `npm run problem -- 06-03` (`src/problems/06-graphs/03-course-schedule.ts`)

## Dynamic Programming

Study files: `src/problems/07-dynamic-programming/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 28. Climbing Stairs: `npm run problem -- 07-01` (`src/problems/07-dynamic-programming/01-climbing-stairs.ts`)
- [ ] 29. House Robber: `npm run problem -- 07-02` (`src/problems/07-dynamic-programming/02-house-robber.ts`)
- [ ] 30. Coin Change: `npm run problem -- 07-03` (`src/problems/07-dynamic-programming/03-coin-change.ts`)
- [ ] 31. Longest Increasing Subsequence: `npm run problem -- 07-04` (`src/problems/07-dynamic-programming/04-longest-increasing-subsequence.ts`)
- [ ] 32. Word Break: `npm run problem -- 07-05` (`src/problems/07-dynamic-programming/05-word-break.ts`)
- [ ] 33. Longest Common Subsequence: `npm run problem -- 07-06` (`src/problems/07-dynamic-programming/06-longest-common-subsequence.ts`)

## Greedy & Heap

Greedy study files: `src/problems/08-greedy/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

Heap study files: `src/problems/09-heap/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 34. Maximum Units on a Truck: `npm run problem -- 08-01` (`src/problems/08-greedy/01-maximum-units-on-a-truck.ts`)
- [ ] 35. Jump Game: `npm run problem -- 08-02` (`src/problems/08-greedy/02-jump-game.ts`)
- [ ] 36. Kth Largest Element in an Array: `npm run problem -- 09-01` (`src/problems/09-heap/01-kth-largest-element.ts`)

## Mixed Review + Mock Timing

- [ ] Redo missed arrays/hash problems from scratch.
- [ ] Redo missed pointer/window problems from scratch.
- [ ] Redo missed stack/search problems from scratch.
- [ ] Redo missed linked-list/tree problems from scratch.
- [ ] Redo missed graph/DP/greedy/heap problems from scratch.
- [ ] Do at least two 25-30 minute mock problems while talking out loud.

## Optional Bonus Gap-Fillers

Use these after the core track, during review days, or when one of these shapes feels weak.

Study files: `src/problems/10-bonus-gap-fillers/` (`PATTERN_GUIDE.md`, `PROBLEM_NOTES.md`, `HINTS.md`)

- [ ] 37. Rotate Image: `npm run problem -- 10-01` (`src/problems/10-bonus-gap-fillers/01-rotate-image.ts`)
- [ ] 38. Flatten Deeply Nested Array: `npm run problem -- 10-02` (`src/problems/10-bonus-gap-fillers/02-flatten-deeply-nested-array.ts`)
- [ ] 39. Product of Array Except Self: `npm run problem -- 10-03` (`src/problems/10-bonus-gap-fillers/03-product-of-array-except-self.ts`)
- [ ] 40. Merge Intervals: `npm run problem -- 10-04` (`src/problems/10-bonus-gap-fillers/04-merge-intervals.ts`)
- [ ] 41. Subsets: `npm run problem -- 10-05` (`src/problems/10-bonus-gap-fillers/05-subsets.ts`)
