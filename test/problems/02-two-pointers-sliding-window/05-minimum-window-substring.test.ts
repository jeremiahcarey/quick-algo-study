import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { minWindow } from "../../../src/problems/02-two-pointers-sliding-window/05-minimum-window-substring.ts";

describe("minWindow", () => {
  it("finds the shortest window containing all target characters", () => {
    assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
  });

  it("returns an empty string when no window exists", () => {
    assert.equal(minWindow("a", "aa"), "");
  });

  it("respects duplicate character requirements", () => {
    assert.equal(minWindow("aa", "aa"), "aa");
  });
});
