import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { maxDepth } from "../../../src/problems/05-trees/02-max-depth.ts";
import { treeFromLevelOrder } from "../../helpers/tree.ts";

describe("maxDepth", () => {
  it("returns the maximum root-to-leaf depth", () => {
    assert.equal(maxDepth(treeFromLevelOrder([3, 9, 20, null, null, 15, 7])), 3);
  });

  it("returns zero for an empty tree", () => {
    assert.equal(maxDepth(null), 0);
  });

  it("handles a skewed tree", () => {
    assert.equal(maxDepth(treeFromLevelOrder([1, null, 2, null, 3])), 3);
  });
});
