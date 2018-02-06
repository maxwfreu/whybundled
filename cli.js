#!/usr/bin/env node

const meow = require("meow");
const defaultCommand = require("./commands/default");

const { pkg, input, flags } = meow({
  argv: process.argv.slice(2)
});

const start = Date.now();

console.log("input: ", input);
console.log("flags: ", flags);

if (input[0].match(".json")) {
  defaultCommand(input[0], flags);
}

const timing = (Date.now() - start) / 1000;
const rounded = Math.round(timing * 100) / 100;
console.log(`🏁  Done in ${rounded}s.`);

/**
 * default:
 * – input: stats.json
 * – flags:
 *   --modulesOnly [x]
 *   --directOnly [x]
 *   --transitiveOnly [x]
 *   --duplicatesOnly
 *   --filesOnly
 */
