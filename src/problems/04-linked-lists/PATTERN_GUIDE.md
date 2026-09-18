# Linked-List Pointer Manipulation Pattern Guide

Linked-list pointer manipulation means solving the problem by walking nodes and rewiring `next` pointers. The core challenge is not the syntax; it is keeping a reference to the rest of the list before changing the current link.

Draw three or four nodes before coding. Label the pointers you plan to move, then trace what happens when one `next` pointer changes. If the drawing loses a node, the code probably will too.

## How To Spot It

Look for problem statements that mention a singly linked list and ask you to mutate, reorder, reverse, merge, split, or detect something by following `next` pointers. Phrases like "in place," "do not create a new list," "return the new head," "eventually reaches null," or "nodes should appear in this order" are strong tells.

Constraints also matter. If the input is a `ListNode | null`, random access is unavailable, and memory should stay constant, you are probably expected to move through the list with pointers instead of copying values into an array.

## When It's Not The Right Pattern

If the input is an array, string, matrix, or tree, use the pattern for that structure instead. If the problem is really about lookup, counting, or membership, a hash map or set may be the main idea even if a list appears somewhere.

If the statement allows building a new output structure freely, pure construction may be simpler than careful rewiring. If the list can contain arbitrary graph-like references beyond `next`, treat it more like a graph or clone problem.

## Basic Mechanics

Reach for plain traversal when you only need to inspect each node or advance until a stopping condition.

```ts
let curr = head;

while (curr !== null) {
  curr = curr.next;
}
```

Reach for reversal when each visited node needs its `next` pointer turned around. Always save `next` before rewiring `curr.next`.

```ts
let prev: ListNode | null = null;
let curr = head;

while (curr !== null) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}

return prev;
```

Reach for fast/slow pointers when the problem asks about cycles, middles, halves, or a split point.

```ts
let slow = head;
let fast = head;

while (fast !== null && fast.next !== null) {
  slow = slow!.next;
  fast = fast.next.next;
}
```

Reach for a dummy head when building, merging, or appending nodes and you want to avoid special-casing the first node.

```ts
const dummy = new ListNode();
let tail = dummy;

while (/* still have nodes to append */) {
  tail.next = /* next node */;
  tail = tail.next;
}

return dummy.next;
```

## Common Variations

- Reverse the whole list, a sublist, or the second half of a list.
- Merge two sorted linked streams by repeatedly choosing which node comes next.
- Detect whether following `next` can loop forever.
- Find the midpoint before splitting, comparing, or weaving halves.
- Reorder nodes by combining several mechanics: split, reverse, then reconnect.
- Use a dummy head to simplify insertions, deletions, and list construction.

## Complexity Profile

Most linked-list pointer manipulation problems run in `O(n)` time because each node is visited a constant number of times. Problems involving two lists usually run in `O(m + n)` time.

The usual space target is `O(1)` extra space. The trade-off is that you save memory by mutating links directly, but you must be more careful about pointer order and edge cases.

## Common Pitfalls

- Losing the tail by changing `curr.next` before saving the original next node.
- Moving `fast.next.next` without first checking that `fast` and `fast.next` exist.
- Forgetting a dummy head and then adding messy special cases for the first appended node.
- Returning the old `head` after operations that create a new head.
- Creating accidental cycles by forgetting to terminate a rebuilt or split list.
- Skipping empty lists, one-node lists, or two-node lists in the initial checks.

Before attempting the problems, practice typing the traversal, reversal, fast/slow, and dummy-head skeletons from memory. The goal is to make the mechanics automatic so you can focus on the problem-specific decision.
