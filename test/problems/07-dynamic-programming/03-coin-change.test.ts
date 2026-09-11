import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { coinChange } from "../../../src/problems/07-dynamic-programming/03-coin-change.ts";

describe("coinChange", () => {
  it("returns the fewest coins needed to make the amount", () => {
    assert.equal(coinChange([1, 2, 5], 11), 3);
  });

  it("returns -1 when the amount cannot be made", () => {
    assert.equal(coinChange([2], 3), -1);
  });

  it("returns zero for amount zero", () => {
    assert.equal(coinChange([1], 0), 0);
  });
});
