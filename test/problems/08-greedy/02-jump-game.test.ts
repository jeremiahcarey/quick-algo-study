import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canJump } from "../../../src/problems/08-greedy/02-jump-game.ts";

describe("canJump", () => {
  it("returns true when the last index is reachable", () => {
    assert.equal(canJump([2, 3, 1, 1, 4]), true);
  });

  it("returns false when a zero blocks all progress", () => {
    assert.equal(canJump([3, 2, 1, 0, 4]), false);
  });

  it("handles already being at the last index", () => {
    assert.equal(canJump([0]), true);
  });
});
