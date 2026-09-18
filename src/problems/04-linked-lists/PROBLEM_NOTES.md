# Linked-List Problem Notes

This file is safe to read before attempting a problem. It contains recognition notes, clarifying questions, and edge cases only; solution hints live in `HINTS.md`.

### 01. Reverse A Linked List

- **Pattern fit**:
  - The input is a singly linked list, and the requested output is the same nodes in the opposite order.
  - The statement asks for a new head, which signals that node connections, not just values, define the result.
  - There is no random access structure in the input, so the work is naturally about linked-list pointer manipulation.
- **Clarifying questions**:
  - Can the list be empty?
  - Should the original nodes be reused, or is creating new nodes allowed?
  - What should be returned for a single-node list?
  - Are node values relevant, or only node order?
- **Edge cases**:
  - A list with several nodes, such as `1 -> 2 -> 3 -> 4 -> 5`.
  - An empty list.
  - A single-node list.

### 02. Merge Two Sorted Lists

- **Pattern fit**:
  - The input gives two singly linked lists rather than arrays or indexable sequences.
  - The result is another linked list whose node order must reflect both inputs.
  - The problem wording is about combining node chains, so linked-list pointer manipulation is the natural pattern.
- **Clarifying questions**:
  - Can either input list be empty?
  - Can both input lists be empty?
  - Should equal values preserve all original nodes?
  - Should the result reuse existing nodes or allocate new ones?
  - Are the input lists guaranteed to already be sorted?
- **Edge cases**:
  - Two non-empty sorted lists with overlapping values, such as `[1, 2, 4]` and `[1, 3, 4]`.
  - Two empty lists.
  - Duplicate values across one or both lists.
  - One list much shorter than the other.

### 03. Linked List Cycle

- **Pattern fit**:
  - The statement defines the condition in terms of repeatedly following `next` pointers.
  - The list may not have a normal ending, so the shape of the node links is the whole question.
  - The task asks about linked structure, not values, ordering, or indexing.
- **Clarifying questions**:
  - How is a cycle represented in the test harness or interview examples?
  - Can a single node point to itself?
  - Can the list be empty?
  - Are repeated values relevant, or only repeated node identities?
  - Should the answer identify where the cycle starts or only whether one exists?
- **Edge cases**:
  - A multi-node list where the last node points back into the list.
  - A normal multi-node list that eventually ends.
  - A single node pointing to itself.
  - An empty list.

### 04. Reorder List

- **Pattern fit**:
  - The statement gives an order based on linked-list positions from both ends of the original list.
  - It explicitly says to mutate existing nodes instead of returning a new list.
  - The final shape is defined by new `next` relationships, which points to linked-list pointer manipulation.
- **Clarifying questions**:
  - Can the list be empty?
  - What should happen for one-node or two-node lists?
  - Should the function return anything or only mutate the input?
  - Must the original nodes be reused?
  - Are node values unique, or can positions matter even with duplicates?
- **Edge cases**:
  - An even-length list, such as `[1, 2, 3, 4]`.
  - An odd-length list, such as `[1, 2, 3, 4, 5]`.
  - An empty list.
  - A one-node or two-node list.
