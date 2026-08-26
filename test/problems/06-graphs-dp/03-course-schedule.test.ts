import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canFinish } from "../../../src/problems/06-graphs-dp/03-course-schedule.ts";

describe("canFinish", () => {
  it("returns true when all courses can be completed", () => {
    assert.equal(canFinish(2, [[1, 0]]), true);
  });

  it("returns false when prerequisites contain a cycle", () => {
    assert.equal(canFinish(2, [[1, 0], [0, 1]]), false);
  });

  it("detects cycles beyond two courses", () => {
    assert.equal(canFinish(4, [[1, 0], [2, 1], [0, 2], [3, 2]]), false);
  });
});
