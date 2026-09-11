# Greedy Pattern Guide

Use greedy when a local choice has a clear ranking and taking the best available option cannot make future choices worse.

## When To Think Greedy

- The prompt asks for a maximum or minimum under simple constraints.
- Sorting by one value makes the next best choice obvious.
- You can track the farthest, cheapest, earliest, or most valuable option seen so far.

## Core Template

1. Identify the local choice.
2. Prove to yourself why choosing it cannot block a better future.
3. Sort or scan in the order that exposes the best choice.
4. Keep only the current best state you need.

## Problem Tips

### 01. Maximum Units On A Truck

- Tell: each box type has a value per box, and the truck has a box-count capacity.
- Tip: think about which box type is always best to take before lower-value types.
- Watch out: you may take only some boxes from the final type that fits.

### 02. Jump Game

- Tell: each index gives you reach, and you only need to know whether the end is reachable.
- Tip: scan while tracking the farthest index you can reach so far.
- Watch out: once the current index is beyond your farthest reach, later jumps do not matter.
