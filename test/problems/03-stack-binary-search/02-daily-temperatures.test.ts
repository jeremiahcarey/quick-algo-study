import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { dailyTemperatures } from "../../../src/problems/03-stack-binary-search/02-daily-temperatures.ts";

describe("dailyTemperatures", () => {
  it("returns days until a warmer temperature", () => {
    assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it("returns zero when no warmer day exists", () => {
    assert.deepEqual(dailyTemperatures([30, 20, 10]), [0, 0, 0]);
  });

  it("does not treat equal temperature as warmer", () => {
    assert.deepEqual(dailyTemperatures([70, 70, 71]), [2, 1, 0]);
  });
});
