import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { rob } from "../../../src/problems/06-graphs-dp/05-house-robber.ts";

describe("rob", () => {
  it("maximizes non-adjacent house values", () => {
    assert.equal(rob([1, 2, 3, 1]), 4);
  });

  it("can skip a larger-looking local choice", () => {
    assert.equal(rob([2, 7, 9, 3, 1]), 12);
  });

  it("handles an empty street", () => {
    assert.equal(rob([]), 0);
  });
});
