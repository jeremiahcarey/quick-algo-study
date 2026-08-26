import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { groupAnagrams } from "../../../src/problems/01-arrays-hashing/03-group-anagrams.ts";

function normalize(groups: string[][]): string[][] {
  return groups.map((group) => [...group].sort()).sort((a, b) => a.join(",").localeCompare(b.join(",")));
}

describe("groupAnagrams", () => {
  it("groups words with the same letters", () => {
    const actual = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

    assert.deepEqual(normalize(actual), normalize([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
  });

  it("handles empty strings", () => {
    assert.deepEqual(groupAnagrams([""]), [[""]]);
  });

  it("does not group by length alone", () => {
    assert.deepEqual(normalize(groupAnagrams(["ab", "cd", "ba"])), normalize([["ab", "ba"], ["cd"]]));
  });
});
