import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  flattenDeeplyNestedArray,
  type NestedArray,
} from "../../../src/problems/07-bonus-gap-fillers/02-flatten-deeply-nested-array.ts";

describe("flattenDeeplyNestedArray", () => {
  it("does not flatten anything when n is zero", () => {
    const arr: NestedArray = [1, 2, [3, [4]]];

    assert.deepEqual(flattenDeeplyNestedArray(arr, 0), [1, 2, [3, [4]]]);
  });

  it("flattens one level when n is one", () => {
    const arr: NestedArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

    assert.deepEqual(flattenDeeplyNestedArray(arr, 1), [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      [9, 10, 11],
      12,
      13,
      14,
      15,
    ]);
  });

  it("flattens nested arrays up to the requested depth", () => {
    const arr: NestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

    assert.deepEqual(flattenDeeplyNestedArray(arr, 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});
