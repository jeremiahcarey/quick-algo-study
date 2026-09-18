# Heap / Priority Queue Pattern Guide

A heap, often used as a priority queue, keeps cheap repeated access to the current minimum or maximum item. The core idea is to avoid fully sorting every value when all you need is the next best, next worst, or a small ranked frontier.

## How To Spot It

Look for prompts that ask for ranked extremes or repeated priority choices:

- `k` largest, `k` smallest, `top k`, or `kth` largest/smallest.
- A stream of values where you need to keep the current best few items.
- Merging sorted sources, such as sorted arrays, lists, or event streams.
- Repeated `extract-min` / `extract-max` behavior, even if the prompt does not use heap language.

## When It's Not The Right Pattern

- If `k` is close to `n`, a full sort is often simpler and may be perfectly acceptable.
- If the task only needs frequencies or membership, a hash map or set is usually more direct.
- If you only need one pass with no repeated priority access, a plain variable may be enough.

## Basic Mechanics

JavaScript and TypeScript do not include a built-in heap. In interviews, a sorted-array or sort-based fallback is often accepted if you state the trade-off: simpler code, but slower inserts/removals or more sorting work.

A minimal binary min-heap stores the smallest value at index `0`:

```ts
class MinHeap {
  private data: number[] = [];

  size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(value: number): void {
    this.data.push(value);
    let child = this.data.length - 1;

    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (this.data[parent] <= this.data[child]) break;
      [this.data[parent], this.data[child]] = [this.data[child], this.data[parent]];
      child = parent;
    }
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    if (this.data.length === 1) return this.data.pop();

    const top = this.data[0];
    this.data[0] = this.data.pop()!;
    let parent = 0;

    while (true) {
      const left = parent * 2 + 1;
      const right = parent * 2 + 2;
      let smallest = parent;

      if (left < this.data.length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < this.data.length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }
      if (smallest === parent) break;

      [this.data[parent], this.data[smallest]] = [this.data[smallest], this.data[parent]];
      parent = smallest;
    }

    return top;
  }
}
```

## Common Variations

- Fixed-size heap of `k` items: keep only the best `k` candidates seen so far.
- Max-heap: negate numeric values or write the comparator in the opposite direction.
- Two heaps: split values into lower and upper halves when you need a moving middle value.
- Heap entries with metadata: store tuples or objects when priority and payload differ.

## Complexity Profile

- `push`: `O(log n)`.
- `pop`: `O(log n)`.
- `peek`: `O(1)`.
- Top-`k` with a size-`k` heap: `O(n log k)` time and `O(k)` space.
- Sorting all values: `O(n log n)` time, often simpler when `k` is large or code speed matters more than asymptotic speed.

## Common Pitfalls

- Mixing up min-heap and max-heap for the task.
- Using a heap of size `k` but storing the wrong extreme at the top.
- Popping too early or too late when maintaining a fixed-size heap.
- Reversing the comparator direction and quietly getting the opposite answer.
- Forgetting that `kth` largest usually counts duplicates unless the prompt says distinct.
