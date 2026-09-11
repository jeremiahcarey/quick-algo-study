import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { longestCommonSubsequence } from "../../../src/problems/07-dynamic-programming/06-longest-common-subsequence.ts";

describe("longestCommonSubsequence", () => {
  it("counts a common subsequence that skips characters", () => {
    assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
  });

  it("handles identical strings", () => {
    assert.equal(longestCommonSubsequence("abc", "abc"), 3);
  });

  it("returns zero when there is no common subsequence", () => {
    assert.equal(longestCommonSubsequence("abc", "def"), 0);
  });
});
