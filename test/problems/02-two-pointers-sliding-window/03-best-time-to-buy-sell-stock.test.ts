import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { maxProfit } from "../../../src/problems/02-two-pointers-sliding-window/03-best-time-to-buy-sell-stock.ts";

describe("maxProfit", () => {
  it("finds the best single buy-sell profit", () => {
    assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  });

  it("returns zero when no profit is possible", () => {
    assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
  });

  it("must buy before selling", () => {
    assert.equal(maxProfit([2, 4, 1]), 2);
  });
});
