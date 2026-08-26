import { TreeNode } from "../../src/lib/tree-node.ts";

export function treeFromLevelOrder(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let index = 1;

  while (queue.length > 0 && index < values.length) {
    const node = queue.shift()!;
    const left = values[index++];

    if (left !== undefined && left !== null) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }

    const right = values[index++];
    if (right !== undefined && right !== null) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }

  return root;
}

export function treeToLevelOrder(root: TreeNode | null): Array<number | null> {
  if (root === null) {
    return [];
  }

  const values: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node === null) {
      values.push(null);
      continue;
    }

    values.push(node.val);
    queue.push(node.left, node.right);
  }

  while (values[values.length - 1] === null) {
    values.pop();
  }

  return values;
}

export function findNode(root: TreeNode | null, value: number): TreeNode {
  if (root === null) {
    throw new Error(`Value ${value} not found`);
  }

  if (root.val === value) {
    return root;
  }

  try {
    return findNode(root.left, value);
  } catch {
    return findNode(root.right, value);
  }
}
