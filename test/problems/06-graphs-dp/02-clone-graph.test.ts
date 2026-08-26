import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { cloneGraph } from "../../../src/problems/06-graphs-dp/02-clone-graph.ts";
import { graphFromAdjacency, graphToAdjacency } from "../../helpers/graph.ts";

describe("cloneGraph", () => {
  it("deep-clones a connected graph", () => {
    const original = graphFromAdjacency([[2, 4], [1, 3], [2, 4], [1, 3]]);
    const cloned = cloneGraph(original);

    assert.deepEqual(graphToAdjacency(cloned), [[2, 4], [1, 3], [2, 4], [1, 3]]);
    assert.notEqual(cloned, original);
    assert.notEqual(cloned?.neighbors[0], original?.neighbors[0]);
  });

  it("handles an empty graph", () => {
    assert.equal(cloneGraph(null), null);
  });

  it("clones a single isolated node", () => {
    const original = graphFromAdjacency([[]]);
    const cloned = cloneGraph(original);

    assert.deepEqual(graphToAdjacency(cloned), [[]]);
    assert.notEqual(cloned, original);
  });
});
