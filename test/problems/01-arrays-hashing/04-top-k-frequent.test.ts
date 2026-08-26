import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { topKFrequent } from "../../../src/problems/01-arrays-hashing/04-top-k-frequent.ts";

function sorted(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}

describe("topKFrequent", () => {
  it("returns the k most frequent numbers", () => {
    assert.deepEqual(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2)), [1, 2]);
  });

  it("handles a single distinct value", () => {
    assert.deepEqual(topKFrequent([1], 1), [1]);
  });

  it("counts negative numbers separately", () => {
    assert.deepEqual(sorted(topKFrequent([-1, -1, 2, 2, 2, 3], 2)), [-1, 2]);
  });
});
