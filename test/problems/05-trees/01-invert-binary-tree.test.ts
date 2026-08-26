import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { invertTree } from "../../../src/problems/05-trees/01-invert-binary-tree.ts";
import { treeFromLevelOrder, treeToLevelOrder } from "../../helpers/tree.ts";

describe("invertTree", () => {
  it("mirrors a binary tree", () => {
    const root = treeFromLevelOrder([4, 2, 7, 1, 3, 6, 9]);

    assert.deepEqual(treeToLevelOrder(invertTree(root)), [4, 7, 2, 9, 6, 3, 1]);
  });

  it("handles an empty tree", () => {
    assert.equal(invertTree(null), null);
  });

  it("preserves asymmetric missing children in mirrored positions", () => {
    const root = treeFromLevelOrder([1, 2, null, 3]);

    assert.deepEqual(treeToLevelOrder(invertTree(root)), [1, null, 2, null, 3]);
  });
});
