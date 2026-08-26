import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchRotated } from "../../../src/problems/03-stack-binary-search/04-search-rotated.ts";

describe("searchRotated", () => {
  it("finds a target in a rotated sorted array", () => {
    assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 0), 4);
  });

  it("returns -1 when the target is absent", () => {
    assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 3), -1);
  });

  it("handles arrays that are not rotated", () => {
    assert.equal(searchRotated([1, 2, 3, 4, 5], 4), 3);
  });
});
