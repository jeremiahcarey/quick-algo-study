import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { rotateImage } from "../../../src/problems/10-bonus-gap-fillers/01-rotate-image.ts";

describe("rotateImage", () => {
  it("rotates a 3x3 matrix clockwise in place", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const returned = rotateImage(matrix);

    assert.equal(returned, undefined);
    assert.deepEqual(matrix, [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("rotates a 4x4 matrix", () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];

    rotateImage(matrix);

    assert.deepEqual(matrix, [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  it("handles a 1x1 matrix", () => {
    const matrix = [[1]];

    rotateImage(matrix);

    assert.deepEqual(matrix, [[1]]);
  });
});
