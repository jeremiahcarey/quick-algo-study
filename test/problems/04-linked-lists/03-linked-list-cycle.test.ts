import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { hasCycle } from "../../../src/problems/04-linked-lists/03-linked-list-cycle.ts";
import { listFromArray, listWithCycle } from "../../helpers/list.ts";

describe("hasCycle", () => {
  it("returns true when a list has a cycle", () => {
    assert.equal(hasCycle(listWithCycle([3, 2, 0, -4], 1)), true);
  });

  it("returns false when a list has no cycle", () => {
    assert.equal(hasCycle(listFromArray([1, 2, 3])), false);
  });

  it("detects a single node pointing to itself", () => {
    assert.equal(hasCycle(listWithCycle([1], 0)), true);
  });
});
