import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { binarySearch } from "../../../src/problems/03-stack-binary-search/03-binary-search.ts";

describe("binarySearch", () => {
  it("returns the index of the target", () => {
    assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
  });

  it("returns -1 when the target is absent", () => {
    assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
  });

  it("handles single-element arrays", () => {
    assert.equal(binarySearch([5], 5), 0);
  });
});
