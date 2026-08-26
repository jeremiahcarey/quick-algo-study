import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { minEatingSpeed } from "../../../src/problems/03-stack-binary-search/05-koko-eating-bananas.ts";

describe("minEatingSpeed", () => {
  it("finds the minimum eating speed within h hours", () => {
    assert.equal(minEatingSpeed([3, 6, 7, 11], 8), 4);
  });

  it("handles large piles", () => {
    assert.equal(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
  });

  it("rounds each pile up to a whole hour", () => {
    assert.equal(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
  });
});
