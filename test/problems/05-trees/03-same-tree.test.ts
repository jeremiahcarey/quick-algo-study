import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isSameTree } from "../../../src/problems/05-trees/03-same-tree.ts";
import { treeFromLevelOrder } from "../../helpers/tree.ts";

describe("isSameTree", () => {
  it("returns true for identical trees", () => {
    assert.equal(isSameTree(treeFromLevelOrder([1, 2, 3]), treeFromLevelOrder([1, 2, 3])), true);
  });

  it("returns false for different structure", () => {
    assert.equal(isSameTree(treeFromLevelOrder([1, 2]), treeFromLevelOrder([1, null, 2])), false);
  });

  it("returns false for different values", () => {
    assert.equal(isSameTree(treeFromLevelOrder([1, 2, 1]), treeFromLevelOrder([1, 1, 2])), false);
  });
});
