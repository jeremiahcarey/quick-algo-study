import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { containsDuplicate } from "../../../src/problems/01-arrays-hashing/02-contains-duplicate.ts";

describe("containsDuplicate", () => {
  it("returns true when a value appears more than once", () => {
    assert.equal(containsDuplicate([1, 2, 3, 1]), true);
  });

  it("returns false when every value is unique", () => {
    assert.equal(containsDuplicate([1, 2, 3, 4]), false);
  });

  it("handles negative numbers and zero", () => {
    assert.equal(containsDuplicate([0, -1, -2, -1]), true);
  });
});
