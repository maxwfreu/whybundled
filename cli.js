#!/usr/bin/env node
/* @flow */
const createProgressBar = require("./lib/console/progress-bar");
const defaultReporter = require("./lib/reporter");
const defaultCommand = require("./commands/default");

const whybundled = () => {
  const updateProgressBar = createProgressBar();
  let reporter = defaultReporter;
  return defaultCommand("stats.json", {}, "", reporter, updateProgressBar);
};

module.exports = { whybundled };
