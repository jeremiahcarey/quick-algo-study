# Dynamic Programming Pattern Guide

Dynamic programming is for problems where the same smaller questions appear again and again, and the answer to the full problem can be built from answers you have already solved.

The core idea is to trade repeated guessing for stored progress: define a useful smaller answer, compute it once, and reuse it whenever a larger answer needs it.

## Core Idea

A DP problem usually has two ingredients:

- Overlapping subproblems: brute force reaches the same smaller input many times.
- Optimal or countable structure: the current answer depends on earlier indexes, smaller amounts, shorter prefixes, or previous choices.

Think in terms of dependencies. If answer `i` only needs answers before `i`, or answer `(i, j)` only needs smaller prefixes, you can fill those answers in a safe order instead of recomputing them.

## How To Spot It

Phrasing tells:

- "Number of ways" or "count distinct ways"
- "Minimum", "maximum", "fewest", "best", or "optimal"
- "Longest" or "shortest" subject to rules
- "Can this be formed/segmented/reached?"
- Choices that include or exclude an item, index, character, or amount

Constraint tells:

- Plain recursion would branch heavily, but many branches share the same remaining index, amount, or prefix.
- `n` is moderate enough that `O(n²)` is acceptable, especially for subsequence or two-string comparisons.
- Target amounts or capacities are small enough to build a table up to that value.
- Inputs have natural prefixes: arrays, strings, steps, amounts, or two sequences.

Quick examples: climbing stairs asks for a count, coin change asks for a minimum over smaller amounts, and common subsequence problems compare prefixes.

## When It's Not The Right Pattern

- Use greedy when a local choice can be proven to stay globally optimal. If you can safely take the best-looking choice now without reconsidering, DP may be unnecessary.
- Use plain recursion when the search tree is tiny or states are not reused. Memoization helps repeated states, not one-off branches.
- Use sliding window when the answer is a contiguous range and the window can move monotonically. DP is more common when choices can skip items, split prefixes, or compare many prior states.
- Use graph traversal when the problem is mainly reachability among explicit nodes and edges, unless the graph is really a state graph with repeated subproblems.

## Basic Mechanics

Use the same checklist every time:

1. State: define the smaller question in plain English.
2. Recurrence: describe how this answer is built from smaller answers.
3. Base Case: fill answers that need no work.
4. Order: choose an iteration or recursion order that computes dependencies first.
5. Answer: return the entry or accumulated value that matches the original question.

A bottom-up 1D template:

```ts
function solve(input: Input): Answer {
  const n = getSize(input);
  const dp: Answer[] = Array(n + 1).fill(initialValue);

  dp[baseIndex] = baseAnswer;

  for (let i = firstUnsolved; i <= n; i++) {
    for (const choice of choicesFor(i, input)) {
      dp[i] = combine(dp[i], dp[previousIndex(i, choice)]);
    }
  }

  return dp[n];
}
```

A memoized recursion template:

```ts
function solve(input: Input): Answer {
  const memo = new Map<string, Answer>();

  function dfs(state: State): Answer {
    const key = encode(state);

    if (isBase(state)) return baseAnswer(state);
    if (memo.has(key)) return memo.get(key)!;

    let answer = initialAnswer(state);

    for (const next of nextStates(state, input)) {
      answer = combine(answer, dfs(next));
    }

    memo.set(key, answer);
    return answer;
  }

  return dfs(startState(input));
}
```

## Common Sub-Shapes

- 1D Linear DP: each position depends on earlier positions. Common for steps, running choices, and adjacent restrictions.
- Knapsack-Style Amounts: each amount or capacity tries available options and reuses smaller amounts.
- Subsequence DP: each index asks how it can extend a valid earlier index while preserving order.
- String Segmentation: each prefix asks whether it can be split after some earlier valid prefix.
- 2D Two-String Tables: each cell compares two prefixes and depends on neighboring smaller prefix cells.

## Complexity Profile

The cost is usually:

- Number of states × transitions tried per state.
- Space for the table or memo storing those states.

Examples of the shape:

- `n` positions with constant transitions: `O(n)` time, `O(n)` space.
- `amount` targets trying `k` options: `O(amount * k)` time, `O(amount)` space.
- `n` indexes comparing to all earlier indexes: `O(n²)` time, `O(n)` space.
- Two strings of lengths `m` and `n`: `O(mn)` time and `O(mn)` space.

Space can often be reduced when a state only needs a few previous values or the previous row of a table. Do this after the recurrence is correct; a full table is easier to reason about first.

## Common Pitfalls

- Wrong base cases: off-by-one errors often come from unclear meanings for `dp[0]`, empty prefixes, or the first item.
- Unsafe iteration order: if `dp[i]` reads `dp[j]`, make sure `dp[j]` has already been computed.
- Confusing subsequence with substring: subsequences preserve order but may skip items; substrings must be contiguous.
- Forgetting unreachable states: use a sentinel like `Infinity` or `false`, and avoid extending states that are not actually possible.
- Returning the wrong entry: some problems answer `dp[n]`, while others need the best value across all ending positions.
- Optimizing space too early: rolling variables and one-row tables are easy to get wrong before the dependency direction is clear.
