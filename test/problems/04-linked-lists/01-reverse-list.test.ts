import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { reverseList } from "../../../src/problems/04-linked-lists/01-reverse-list.ts";
import { listFromArray, listToArray } from "../../helpers/list.ts";

describe("reverseList", () => {
  it("reverses a linked list", () => {
    assert.deepEqual(listToArray(reverseList(listFromArray([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]);
  });

  it("handles an empty list", () => {
    assert.equal(reverseList(null), null);
  });

  it("handles a single node", () => {
    assert.deepEqual(listToArray(reverseList(listFromArray([1]))), [1]);
  });
});
