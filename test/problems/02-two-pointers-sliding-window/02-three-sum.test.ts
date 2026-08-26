import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { threeSum } from "../../../src/problems/02-two-pointers-sliding-window/02-three-sum.ts";

function normalize(triplets: number[][]): number[][] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((a, b) => a.join(",").localeCompare(b.join(",")));
}

describe("threeSum", () => {
  it("finds unique triplets that sum to zero", () => {
    assert.deepEqual(normalize(threeSum([-1, 0, 1, 2, -1, -4])), normalize([[-1, -1, 2], [-1, 0, 1]]));
  });

  it("returns an empty list when no triplet exists", () => {
    assert.deepEqual(threeSum([0, 1, 1]), []);
  });

  it("does not return duplicate triplets", () => {
    assert.deepEqual(normalize(threeSum([0, 0, 0, 0])), [[0, 0, 0]]);
  });
});
