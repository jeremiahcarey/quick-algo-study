import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isValidParentheses } from "../../../src/problems/03-stack-binary-search/01-valid-parentheses.ts";

describe("isValidParentheses", () => {
  it("accepts properly nested brackets", () => {
    assert.equal(isValidParentheses("()[]{}"), true);
  });

  it("rejects crossed brackets", () => {
    assert.equal(isValidParentheses("(]"), false);
  });

  it("rejects leftover open brackets", () => {
    assert.equal(isValidParentheses("["), false);
  });
});
