import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { maximumUnits } from "../../../src/problems/08-greedy/01-maximum-units-on-a-truck.ts";

describe("maximumUnits", () => {
  it("maximizes units while respecting truck capacity", () => {
    assert.equal(maximumUnits([[1, 3], [2, 2], [3, 1]], 4), 8);
  });

  it("takes higher-value boxes first even when input is unsorted", () => {
    assert.equal(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10), 91);
  });

  it("can take only part of a box type", () => {
    assert.equal(maximumUnits([[3, 5], [10, 2]], 2), 10);
  });
});
