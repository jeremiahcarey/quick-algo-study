# Quick Algo Study

A tiny TypeScript kata repo for doing a bare-minimum, high-yield review of common LeetCode-style interview patterns.

This is not a giant problem bank or a complete course. It is a compact practice track, assuming at least a very basic familiarity with common data structures: 36 core problems plus 5 optional bonus gap-fillers, ordered by pattern, with blank solution stubs, tests, problem prompts, example inputs/outputs, and tiered study notes. There is no fixed timeline; a comfortable full pass takes about 8-12 weeks, and `STUDY_PLAN.md` has pacing suggestions.

## Who This Is For

Use this if you have limited prep time and want to practice recognizing common coding-interview patterns without spending time searching for problems, setting up a test framework, or choosing what to do next.

The goal is to get comfortable with the recurring shapes:

- arrays and hashing
- two pointers and sliding windows
- stacks and binary search
- linked lists
- trees
- graphs
- dynamic programming
- greedy
- heap and priority queue
- optional gap-fillers for matrix transforms, nested arrays, prefix/suffix, intervals, and backtracking

## Quick Start

```sh
npm run problem
npm run problem -- 01-01
```

The first command prints the ordered problem list. The second command runs the tests for the first problem, Two Sum.

Blank stubs are expected to fail. Pick a problem, implement the function, rerun its test, and repeat until it passes.

## Requirements

- Node 25+ with TypeScript type stripping support.
- No npm install is required.

## How The Repo Is Organized

Problems and tests use the same category/problem code:

```text
src/problems/02-two-pointers-sliding-window/01-valid-palindrome.ts
test/problems/02-two-pointers-sliding-window/01-valid-palindrome.test.ts
```

Run that problem with:

```sh
npm run problem -- 02-01
```

Each solution file contains:

- a short problem description
- example input/output
- the function signature
- a blank function body for your implementation

Each category folder contains three study files, ordered by spoiler level:

- `PATTERN_GUIDE.md`: what the pattern is, how to spot it, when it does not apply, and its core mechanics and code skeletons
- `PROBLEM_NOTES.md`: spoiler-light per-problem notes — pattern recognition, clarifying questions to ask an interviewer, and edge cases; safe to read before attempting
- `HINTS.md`: graduated per-problem hints, from a nudge to a technique to an approach outline; read only when stuck, one hint at a time

## Daily Workflow

### 1. Pick The Next Problem

Open `STUDY_PLAN.md` and choose the first unchecked problem. The checklist includes both the run command and the source file.

Read the problem description in the source file before opening the tests. This keeps the first attempt closer to an interview.

If you are not sure which pattern applies, skim the category's `PATTERN_GUIDE.md`. Before attempting, you can also read the problem's section in `PROBLEM_NOTES.md` — it is spoiler-free and mirrors the clarifying questions you would ask in an interview.

Before linked lists, trees, or graphs, read those categories' pattern guides and practice typing the traversal skeletons once or twice from memory.

### 2. Try To Implement It

Write your solution inside the blank function body.

While solving, practice talking through:

- the brute-force approach
- the pattern you think applies
- the time and space complexity
- the optimized approach you are coding

Give yourself about 20-25 minutes. If you get stuck, open the category's `HINTS.md` and read one hint at a time, stopping as soon as you have a new idea, before looking up a full explanation elsewhere.

### 3. Run The One Problem Test

Run only the matching problem test while you are working:

```sh
npm run problem -- 01-01
```

If it passes, mark the problem complete in `STUDY_PLAN.md`.

### 4. Fix And Rerun

If a test fails, read the failing case, adjust your implementation, and run the same command again:

```sh
npm run problem -- 01-01
```

That tight loop is the point of the repo: implement, test, adjust, retest.

### 5. Review

After finishing a pattern group, run:

```sh
npm test
```

During review days, redo missed problems from a blank function body on a 25-30 minute timer.

## Useful Commands

```sh
npm run problem
npm run problem -- 01-01
npm run problem -- 02-01
npm run problem -- 02-01 --watch
npm run problem -- valid-palindrome
npm run problem -- next
npm test
```

Shortcut options:

- `01-01`: category/problem code from the folder and file names
- `2-1`: unpadded category/problem code
- `5`: global study-plan number
- `valid-palindrome`: problem name
- `next`: first unchecked problem in `STUDY_PLAN.md`

## Study Materials

- `STUDY_PLAN.md`: the ordered problem checklist plus pacing suggestions
- `src/problems/**/PATTERN_GUIDE.md`: pattern recognition, mechanics, and code skeletons
- `src/problems/**/PROBLEM_NOTES.md`: spoiler-light interview notes for each problem
- `src/problems/**/HINTS.md`: graduated hints for each problem
- `test/problems/**/*.test.ts`: examples and edge cases
- `test/helpers`: linked list, tree, and graph builders used by tests

## Optional Bonus Problems

The `10-bonus-gap-fillers` section adds five common missing shapes after the core track:

- Rotate Image
- Flatten Deeply Nested Array
- Product of Array Except Self
- Merge Intervals
- Subsets

These are useful if you finish early, want extra review, or notice one of those patterns feels shaky.

## Philosophy

The repo is intentionally small. It is designed to help you practice pattern recognition and implementation fluency, not to replace a full explanations site.

When stuck, spend a focused 20-25 minutes, then climb the category's `HINTS.md` ladder one hint at a time. If you still need a full explanation, read or watch one elsewhere. Either way, come back afterward and re-code the solution without looking.
