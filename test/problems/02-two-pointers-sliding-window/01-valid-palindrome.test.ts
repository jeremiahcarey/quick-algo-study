import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "../../../src/problems/02-two-pointers-sliding-window/01-valid-palindrome.ts";

describe("isPalindrome", () => {
  it("ignores punctuation, spaces, and case", () => {
    assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
  });

  it("returns false for non-palindromes", () => {
    assert.equal(isPalindrome("race a car"), false);
  });

  it("treats strings with no alphanumeric characters as palindromes", () => {
    assert.equal(isPalindrome("., "), true);
  });
});
