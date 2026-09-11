import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { subsets } from "../../../src/problems/10-bonus-gap-fillers/05-subsets.ts";

function normalize(groups: number[][]): number[][] {
  return groups
    .map((group) => [...group].sort((a, b) => a - b))
    .sort((a, b) => a.join(",").localeCompare(b.join(",")));
}

describe("subsets", () => {
  it("returns all subsets of a three-number array", () => {
    assert.deepEqual(
      normalize(subsets([1, 2, 3])),
      normalize([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]),
    );
  });

  it("includes the empty subset for an empty input", () => {
    assert.deepEqual(subsets([]), [[]]);
  });

  it("does not drop negative numbers", () => {
    assert.deepEqual(normalize(subsets([-1, 2])), normalize([[], [-1], [2], [-1, 2]]));
  });
});
