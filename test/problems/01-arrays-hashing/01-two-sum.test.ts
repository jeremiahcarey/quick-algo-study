import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { twoSum } from "../../../src/problems/01-arrays-hashing/01-two-sum.ts";

function valuesAt(nums: number[], indexes: number[]): number[] {
  return indexes.map((index) => nums[index]).sort((a, b) => a - b);
}

describe("twoSum", () => {
  it("finds indexes whose values add to the target", () => {
    assert.deepEqual(valuesAt([2, 7, 11, 15], twoSum([2, 7, 11, 15], 9)), [2, 7]);
  });

  it("can use equal values at different indexes", () => {
    assert.deepEqual(valuesAt([3, 3], twoSum([3, 3], 6)), [3, 3]);
  });

  it("does not reuse the same index twice", () => {
    const nums = [3, 2, 4];
    const indexes = twoSum(nums, 6);

    assert.notEqual(indexes[0], indexes[1]);
    assert.deepEqual(valuesAt(nums, indexes), [2, 4]);
  });
});
