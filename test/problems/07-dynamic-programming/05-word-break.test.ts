import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { wordBreak } from "../../../src/problems/07-dynamic-programming/05-word-break.ts";

describe("wordBreak", () => {
  it("returns true when the string can be segmented", () => {
    assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
  });

  it("allows dictionary words to be reused", () => {
    assert.equal(wordBreak("applepenapple", ["apple", "pen"]), true);
  });

  it("returns false when no full segmentation exists", () => {
    assert.equal(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
  });
});
