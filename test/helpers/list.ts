import { ListNode } from "../../src/lib/list-node.ts";

export function listFromArray(values: number[]): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;

  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }

  return dummy.next;
}

export function listToArray(head: ListNode | null, limit = 100): number[] {
  const values: number[] = [];
  let current = head;

  while (current !== null && values.length < limit) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

export function listWithCycle(values: number[], cycleIndex: number): ListNode | null {
  const head = listFromArray(values);
  if (head === null || cycleIndex < 0) {
    return head;
  }

  let current: ListNode | null = head;
  let cycleNode: ListNode | null = null;
  let tail: ListNode | null = null;
  let index = 0;

  while (current !== null) {
    if (index === cycleIndex) {
      cycleNode = current;
    }
    tail = current;
    current = current.next;
    index += 1;
  }

  if (tail !== null) {
    tail.next = cycleNode;
  }

  return head;
}
