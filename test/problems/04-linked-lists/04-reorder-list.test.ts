import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { reorderList } from "../../../src/problems/04-linked-lists/04-reorder-list.ts";
import { listFromArray, listToArray } from "../../helpers/list.ts";

describe("reorderList", () => {
  it("reorders an even-length list in place", () => {
    const head = listFromArray([1, 2, 3, 4]);

    reorderList(head);

    assert.deepEqual(listToArray(head), [1, 4, 2, 3]);
  });

  it("reorders an odd-length list in place", () => {
    const head = listFromArray([1, 2, 3, 4, 5]);

    reorderList(head);

    assert.deepEqual(listToArray(head), [1, 5, 2, 4, 3]);
  });

  it("handles an empty list", () => {
    assert.equal(reorderList(null), undefined);
  });
});
