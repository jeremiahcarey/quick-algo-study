import { GraphNode } from "../../src/lib/graph-node.ts";

export function graphFromAdjacency(adjacency: number[][]): GraphNode | null {
  if (adjacency.length === 0) {
    return null;
  }

  const nodes = adjacency.map((_, index) => new GraphNode(index + 1));

  adjacency.forEach((neighbors, index) => {
    nodes[index].neighbors = neighbors.map((value) => nodes[value - 1]);
  });

  return nodes[0];
}

export function graphToAdjacency(node: GraphNode | null): number[][] {
  if (node === null) {
    return [];
  }

  const seen = new Map<number, GraphNode>();
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (seen.has(current.val)) {
      continue;
    }

    seen.set(current.val, current);
    for (const neighbor of current.neighbors) {
      queue.push(neighbor);
    }
  }

  return [...seen.values()]
    .sort((a, b) => a.val - b.val)
    .map((current) => current.neighbors.map((neighbor) => neighbor.val).sort((a, b) => a - b));
}
