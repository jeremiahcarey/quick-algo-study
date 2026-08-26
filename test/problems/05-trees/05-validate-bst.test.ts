import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isValidBST } from "../../../src/problems/05-trees/05-validate-bst.ts";
import { treeFromLevelOrder } from "../../helpers/tree.ts";

describe("isValidBST", () => {
  it("returns true for a valid binary search tree", () => {
    assert.equal(isValidBST(treeFromLevelOrder([2, 1, 3])), true);
  });

  it("returns false when a descendant violates the root boundary", () => {
    assert.equal(isValidBST(treeFromLevelOrder([5, 1, 4, null, null, 3, 6])), false);
  });

  it("does not allow duplicate values", () => {
    assert.equal(isValidBST(treeFromLevelOrder([2, 2, 2])), false);
  });
});
