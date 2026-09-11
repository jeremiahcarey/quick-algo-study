import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { productExceptSelf } from "../../../src/problems/10-bonus-gap-fillers/03-product-of-array-except-self.ts";

describe("productExceptSelf", () => {
  it("returns the product of every other number at each index", () => {
    assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  });

  it("handles one zero", () => {
    assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
  });

  it("handles two zeros", () => {
    assert.deepEqual(productExceptSelf([0, 4, 0]), [0, 0, 0]);
  });
});
