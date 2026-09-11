import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { numIslands } from "../../../src/problems/06-graphs/01-number-of-islands.ts";

function grid(rows: string[]): string[][] {
  return rows.map((row) => row.split(""));
}

describe("numIslands", () => {
  it("counts connected groups of land", () => {
    assert.equal(numIslands(grid(["11110", "11010", "11000", "00000"])), 1);
  });

  it("counts separate islands", () => {
    assert.equal(numIslands(grid(["11000", "11000", "00100", "00011"])), 3);
  });

  it("does not connect diagonals", () => {
    assert.equal(numIslands(grid(["10", "01"])), 2);
  });
});
