import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const testRoot = join(root, "test", "problems");
const studyPlanPath = join(root, "STUDY_PLAN.md");
const args = process.argv.slice(2);
const watch = args.includes("--watch") || args.includes("-w");
const query = args.find((arg) => !arg.startsWith("-"));

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const tests = walk(testRoot)
  .filter((path) => path.endsWith(".test.ts"))
  .sort()
  .map((path, index) => {
    const testPath = relative(root, path);
    const sourcePath = testPath
      .replace(/^test\/problems\//, "src/problems/")
      .replace(/\.test\.ts$/, ".ts");
    const pathParts = testPath.split("/");
    const categoryCode = pathParts.at(-2).match(/^(\d+)/)?.[1];
    const slug = testPath.split("/").at(-1).replace(/\.test\.ts$/, "");
    const problemCode = slug.match(/^(\d+)/)?.[1];
    const code = `${categoryCode}-${problemCode}`;
    const fallbackTitle = slug
      .replace(/^\d+-/, "")
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    return { code, number: index + 1, sourcePath, testPath, title: fallbackTitle, slug };
  });

const plan = readFileSync(studyPlanPath, "utf8");
const titlesByNumber = new Map(
  [...plan.matchAll(/^- \[.\] (\d+)\. ([^:]+):/gm)].map((match) => [Number(match[1]), match[2]]),
);

for (const test of tests) {
  test.title = titlesByNumber.get(test.number) ?? test.title;
}

function printList() {
  console.log("Choose a problem with one of these commands:\n");
  console.log("  npm run problem -- 01-01");
  console.log("  npm run problem -- 02-01");
  console.log("  npm run problem -- two-sum");
  console.log("  npm run problem -- 01-01 --watch\n");

  for (const test of tests) {
    console.log(`${test.code} / ${String(test.number).padStart(2, "0")}. ${test.title}`);
    console.log(`    ${test.sourcePath}`);
  }
}

function firstUncheckedProblemNumber() {
  const match = plan.match(/^- \[ \] (\d+)\./m);
  return match ? Number(match[1]) : null;
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function normalizeCode(value) {
  const match = value.match(/^(\d{1,2})-(\d{1,2})$/);
  if (!match) {
    return null;
  }

  return `${match[1].padStart(2, "0")}-${match[2].padStart(2, "0")}`;
}

function findTest(rawQuery) {
  if (rawQuery === "next") {
    const next = firstUncheckedProblemNumber();
    return next === null ? null : tests[next - 1];
  }

  const code = normalizeCode(rawQuery);
  if (code !== null) {
    return tests.find((test) => test.code === code) ?? null;
  }

  if (/^\d+$/.test(rawQuery)) {
    return tests[Number(rawQuery) - 1] ?? null;
  }

  const normalizedQuery = normalize(rawQuery);
  return (
    tests.find((test) => normalize(test.slug) === normalizedQuery) ??
    tests.find((test) => normalize(test.title) === normalizedQuery) ??
    tests.find((test) => normalize(test.slug).includes(normalizedQuery)) ??
    tests.find((test) => normalize(test.title).includes(normalizedQuery)) ??
    null
  );
}

if (!query) {
  printList();
  process.exit(0);
}

const selected = findTest(query);

if (!selected) {
  console.error(`No problem matched "${query}".\n`);
  printList();
  process.exit(1);
}

console.log(`Running ${String(selected.number).padStart(2, "0")}. ${selected.title}`);
console.log(`Source: ${selected.sourcePath}`);
console.log(`Test:   ${selected.testPath}\n`);

const nodeArgs = ["--experimental-strip-types"];
if (watch) {
  nodeArgs.push("--watch");
}
nodeArgs.push("--test", selected.testPath);

const result = spawnSync("node", nodeArgs, { stdio: "inherit" });
process.exit(result.status ?? 1);
