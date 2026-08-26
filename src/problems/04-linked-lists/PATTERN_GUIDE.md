# Linked Lists Pattern Guide

## When To Think Pointer Manipulation

Linked list problems are usually about changing `next` pointers without losing access to the rest of the list. Draw three or four nodes before coding.

## When To Think Fast And Slow Pointers

Use fast/slow pointers when you need to detect a cycle, find a midpoint, or compare halves of a list.

## Problem Tips

### 01. Reverse A Linked List

- Tell: every node's `next` pointer needs to point backward.
- Tip: keep references to previous, current, and next.
- Watch out: save the next node before rewiring the current one.

### 02. Merge Two Sorted Lists

- Tell: two sorted streams need to become one sorted stream.
- Tip: a dummy head can simplify appending nodes.
- Watch out: append the remaining tail after one list runs out.

### 03. Linked List Cycle

- Tell: following `next` may never reach null.
- Tip: one pointer moving faster than another can reveal a loop without extra memory.
- Watch out: a one-node self-cycle is still a cycle.

### 04. Reorder List

- Tell: the final order alternates between the front and back of the original list.
- Tip: think in phases: split, reverse part, then weave.
- Watch out: mutate existing nodes instead of returning a new list.
