# Greedy Pattern Guide

Greedy algorithms make the locally best choice at each step and commit to it. They are only valid when that choice never needs to be undone: once you take the best available option now, no future decision can make a different earlier choice better.

The core intuition is to keep the problem moving forward with the smallest useful state. Instead of exploring every combination, prove that a simple local rule preserves at least one optimal path.

## How To Spot It

- The prompt asks for the maximum or minimum you can carry, reach, schedule, save, remove, or collect.
- The wording has a natural best-first feel: highest value, earliest finish, farthest reach, cheapest cost, or largest gain.
- A local choice seems obviously dominant because it uses the same resource better than another choice.
- The constraints make brute force or DP feel heavy, but sorting once or scanning once feels enough.
- You only need the final total, feasibility, or count, not every exact sequence of choices.
- The state can stay small: best seen so far, remaining capacity, current reach, or current boundary.

## How To Justify Greedy In An Interview

Do not just say greedy because it looks right. Give a short reason why the local choice is safe.

The usual sanity check is an exchange argument: take any optimal answer that does not make your greedy choice first, then swap your greedy choice into it. If the swap is never worse and does not break the rules, there is an optimal answer that agrees with greedy.

Before committing, try small counterexamples by hand. Look for cases where taking the obvious item now blocks a better future combination. If you can find one, greedy is not valid for that rule. If every attempted counterexample can be repaired by the same exchange idea, you likely have the right pattern.

## When It's Not The Right Pattern

Greedy fails when choices interact in ways that make an early local win block a better global result. That usually means you need dynamic programming, backtracking, or graph search instead.

Use DP when the best answer depends on comparing multiple previous states, such as taking one item preventing nearby items, splitting a string in many possible places, or building a target amount from reusable options. The tell is that you cannot summarize the past with one best value without losing important alternatives.

A quick difference: greedy asks, "What choice is always safe right now?" DP asks, "What state stores the best answer after considering these earlier choices?"

## Basic Mechanics

Sort-then-consume greedy:

```ts
function greedyBySortedOrder(items: number[][], capacity: number): number {
  items.sort((a, b) => score(b) - score(a));

  let total = 0;
  for (const item of items) {
    if (capacity === 0) break;

    const used = Math.min(amount(item), capacity);
    total += used * value(item);
    capacity -= used;
  }

  return total;
}
```

Single-pass best-reachable / best-so-far greedy:

```ts
function greedyReachCheck(nums: number[]): boolean {
  let bestReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > bestReach) return false;
    bestReach = Math.max(bestReach, i + nums[i]);
  }

  return true;
}
```

Single-pass best-so-far shape:

```ts
function scanBest(nums: number[]): number {
  let best = nums[0];

  for (const num of nums) {
    best = Math.max(best, num);
  }

  return best;
}
```

## Common Variations

- Sort by value density, deadline, interval end, cost, or gain, then consume in that order.
- Track the farthest reachable index or range boundary while scanning left to right.
- Keep the best candidate seen so far and commit when a boundary is reached.
- Repeatedly remove or choose the most helpful option when every choice has a clear priority.
- Count the minimum number of local expansions needed to cover a target range.

## Complexity Profile

Sort-based greedy is typically `O(n log n)` time from sorting, plus a linear pass. Extra space is often `O(1)` if sorting in place, or `O(n)` if you copy the input first.

Single-pass greedy is typically `O(n)` time and `O(1)` extra space because each item or index is considered once and the state stays small.

## Common Pitfalls

- Assuming greedy works without explaining why the local choice is safe.
- Sorting by the wrong key, such as total value when value per unit is what matters.
- Forgetting that ties usually do not matter only if the exchange argument still works.
- Mutating input with an in-place sort when callers expect the original order preserved.
- Off-by-one reachability errors: index `i` is usable only when `i <= bestReach`.
- Updating reach or best state after you have already moved beyond what is reachable.
