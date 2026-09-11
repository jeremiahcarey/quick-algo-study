import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mergeIntervals } from "../../../src/problems/10-bonus-gap-fillers/04-merge-intervals.ts";

describe("mergeIntervals", () => {
  it("merges overlapping intervals", () => {
    assert.deepEqual(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
  });

  it("merges intervals that share an endpoint", () => {
    assert.deepEqual(mergeIntervals([[1, 4], [4, 5]]), [[1, 5]]);
  });

  it("handles unsorted intervals", () => {
    assert.deepEqual(mergeIntervals([[8, 10], [1, 3], [15, 18], [2, 6]]), [[1, 6], [8, 10], [15, 18]]);
  });
});
