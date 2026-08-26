import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { lowestCommonAncestor } from "../../../src/problems/05-trees/06-lowest-common-ancestor.ts";
import { findNode, treeFromLevelOrder } from "../../helpers/tree.ts";

describe("lowestCommonAncestor", () => {
  it("finds the split point in a binary search tree", () => {
    const root = treeFromLevelOrder([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

    assert.equal(lowestCommonAncestor(root, findNode(root, 2), findNode(root, 8))?.val, 6);
  });

  it("returns an ancestor when one node contains the other", () => {
    const root = treeFromLevelOrder([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

    assert.equal(lowestCommonAncestor(root, findNode(root, 2), findNode(root, 4))?.val, 2);
  });

  it("works when both nodes are on the same side", () => {
    const root = treeFromLevelOrder([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

    assert.equal(lowestCommonAncestor(root, findNode(root, 3), findNode(root, 5))?.val, 4);
  });
});
