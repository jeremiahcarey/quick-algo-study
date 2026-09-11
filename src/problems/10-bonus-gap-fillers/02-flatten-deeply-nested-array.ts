export type NestedArray = Array<number | NestedArray>;

/**
 * Given a multi-dimensional array `arr` and a depth `n`, return a flattened
 * version of the array up to that depth.
 *
 * Flatten a nested array only when its current nesting depth is less than `n`.
 * Elements in the outermost array are at depth 0. Do not use `Array.flat`.
 *
 * Example:
 * arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * n = 1
 * returns [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
 *
 * If n = 0, return the same nesting structure without flattening.
 */
export function flattenDeeplyNestedArray(arr: NestedArray, n: number): NestedArray {
}
