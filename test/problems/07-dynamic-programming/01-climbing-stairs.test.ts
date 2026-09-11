import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { climbStairs } from "../../../src/problems/07-dynamic-programming/01-climbing-stairs.ts";

describe("climbStairs", () => {
  it("counts ways to climb two steps", () => {
    assert.equal(climbStairs(2), 2);
  });

  it("counts ways to climb three steps", () => {
    assert.equal(climbStairs(3), 3);
  });

  it("handles a larger value without exponential recursion", () => {
    assert.equal(climbStairs(10), 89);
  });
});
