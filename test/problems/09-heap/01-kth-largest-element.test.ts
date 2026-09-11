import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { findKthLargest } from "../../../src/problems/09-heap/01-kth-largest-element.ts";

describe("findKthLargest", () => {
  it("finds the kth largest value", () => {
    assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
  });

  it("counts duplicates as separate sorted positions", () => {
    assert.equal(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
  });

  it("handles k equal to one", () => {
    assert.equal(findKthLargest([-1, 2, 0], 1), 2);
  });
});
