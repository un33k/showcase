import * as fs from "fs";

import { execute, readme } from "./util";

const { program } = require("commander");
const replaceSection = require("markdown-replace-section");

const DEBUG = false;
const excludeDirs = [
  "node_modules",
  "tmp",
  "coverage",
  "dist",
  "server",
  "public",
];
const sectionName = "Lines of Code (auto-generated stats)";
const sectionHelp = `
### Line of code generation

The above line of code table is auto generated and should not be edited manually.
Note: \`loc\` should be installed on your system, in order to generate the above stats.

- \`brew install loc\` # install on mac
`;
/**
 * Note, the "Lines of Code" section cannot be at the end
 * https://github.com/renke/markdown-replace-section/issues/1
 */
async function main() {
  const loc = await execute(`loc . --exclude ${excludeDirs.join(" ")}`, !DEBUG);
  let readMeContent: string;

  try {
    readMeContent = fs.readFileSync(readme, "utf-8");
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    process.exit(111);
  }

  if (!readMeContent.includes(sectionName)) {
    readMeContent = `${readMeContent}\n\n## ${sectionName}\n\n${sectionHelp}`;
  }

  const replaceAllMatches = false;
  readMeContent = replaceSection(
    readMeContent,
    sectionName,
    "```txt<br>" + loc + "```",
    replaceAllMatches
  );

  fs.writeFileSync(readme, readMeContent, { encoding: "utf8", flag: "w" });
}

program.version("0.0.1", "-v, --version").parse(process.argv);

main().catch((err) => {
  console.error(`Error updating Readme.md`, err);
  process.exit(111);
});