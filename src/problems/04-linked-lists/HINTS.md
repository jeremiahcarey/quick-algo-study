# Linked-List Hints

Use this as a spoiler ladder: read Hint 1, then go back and try again. Only move to the next hint if you are still stuck.

### 01. Reverse A Linked List

- **Hint 1 — nudge**: If one node should point backward, what reference do you need to keep so the rest of the original list is not lost?
- **Hint 2 — technique**: Use iterative three-pointer reversal with `prev`, `curr`, and saved `next`; target `O(n)` time and `O(1)` extra space.
- **Hint 3 — approach outline**:
  1. Start `prev` at `null` and `curr` at `head`.
  2. While `curr` exists, save the original next node.
  3. Point `curr.next` back to `prev`.
  4. Move `prev` and `curr` forward one step.
  5. Return `prev` as the new head.

### 02. Merge Two Sorted Lists

- **Hint 1 — nudge**: How can you always attach the smaller current node without treating the first attachment as a special case?
- **Hint 2 — technique**: Use a dummy head with a moving tail pointer; target `O(m + n)` time and `O(1)` extra space when reusing nodes.
- **Hint 3 — approach outline**:
  1. Create a dummy node and set `tail` to it.
  2. Keep pointers to the current node of each input list.
  3. Compare the current values and attach one node to `tail.next`.
  4. Advance the input pointer you used and then advance `tail`.
  5. When one list is empty, attach the remaining chain from the other list.
  6. Return `dummy.next`.

### 03. Linked List Cycle

- **Hint 1 — nudge**: If one walker moves through the list faster than another, what must happen if the path loops forever?
- **Hint 2 — technique**: Use Floyd's fast/slow pointer cycle detection; target `O(n)` time and `O(1)` extra space.
- **Hint 3 — approach outline**:
  1. Start both pointers at `head`.
  2. Move one pointer one step and the other pointer two steps each round.
  3. Before the two-step move, make sure the faster pointer can safely advance.
  4. If the pointers ever refer to the same node after moving, report a cycle.
  5. If the faster pointer reaches the end, report no cycle.

### 04. Reorder List

- **Hint 1 — nudge**: The target order pulls alternately from the front and the back; how can the back half become easy to consume from left to right?
- **Hint 2 — technique**: Use fast/slow pointers to split, reverse the second half, then weave the two halves; target `O(n)` time and `O(1)` extra space.
- **Hint 3 — approach outline**:
  1. Return early for an empty list or a list with no meaningful reorder.
  2. Find the middle of the list and separate the first half from the second half.
  3. Reverse the second half so its nodes appear in the order needed for weaving.
  4. Walk one pointer through each half.
  5. Alternately connect one node from the first half and one node from the reversed second half.
  6. Make sure the final node points to `null`.
