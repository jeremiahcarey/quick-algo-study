import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { lengthOfLIS } from "../../../src/problems/07-dynamic-programming/04-longest-increasing-subsequence.ts";

describe("lengthOfLIS", () => {
  it("finds the longest increasing subsequence length", () => {
    assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
  });

  it("handles duplicate values as not strictly increasing", () => {
    assert.equal(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
  });

  it("handles a fully descending array", () => {
    assert.equal(lengthOfLIS([7, 7, 7, 7, 7]), 1);
  });
});
