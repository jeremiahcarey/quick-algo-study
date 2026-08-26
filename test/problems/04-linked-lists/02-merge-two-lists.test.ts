import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mergeTwoLists } from "../../../src/problems/04-linked-lists/02-merge-two-lists.ts";
import { listFromArray, listToArray } from "../../helpers/list.ts";

describe("mergeTwoLists", () => {
  it("merges two sorted lists", () => {
    const merged = mergeTwoLists(listFromArray([1, 2, 4]), listFromArray([1, 3, 4]));

    assert.deepEqual(listToArray(merged), [1, 1, 2, 3, 4, 4]);
  });

  it("handles two empty lists", () => {
    assert.equal(mergeTwoLists(null, null), null);
  });

  it("preserves duplicate values", () => {
    assert.deepEqual(listToArray(mergeTwoLists(listFromArray([1, 1]), listFromArray([1]))), [1, 1, 1]);
  });
});
