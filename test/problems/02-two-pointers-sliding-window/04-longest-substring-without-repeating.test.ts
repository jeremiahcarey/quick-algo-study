import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { lengthOfLongestSubstring } from "../../../src/problems/02-two-pointers-sliding-window/04-longest-substring-without-repeating.ts";

describe("lengthOfLongestSubstring", () => {
  it("finds the longest substring without repeating characters", () => {
    assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
  });

  it("handles repeated identical characters", () => {
    assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
  });

  it("moves the left window edge past the previous duplicate", () => {
    assert.equal(lengthOfLongestSubstring("abba"), 2);
  });
});
