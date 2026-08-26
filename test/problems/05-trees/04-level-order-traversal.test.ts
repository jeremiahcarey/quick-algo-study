import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { levelOrder } from "../../../src/problems/05-trees/04-level-order-traversal.ts";
import { treeFromLevelOrder } from "../../helpers/tree.ts";

describe("levelOrder", () => {
  it("returns values grouped by tree level", () => {
    assert.deepEqual(levelOrder(treeFromLevelOrder([3, 9, 20, null, null, 15, 7])), [[3], [9, 20], [15, 7]]);
  });

  it("returns an empty list for an empty tree", () => {
    assert.deepEqual(levelOrder(null), []);
  });

  it("keeps level boundaries for skewed trees", () => {
    assert.deepEqual(levelOrder(treeFromLevelOrder([1, null, 2, null, 3])), [[1], [2], [3]]);
  });
});
