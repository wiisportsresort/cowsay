#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const { say } = require('./lib');

// TODO: if no arguments, read from stdin

console.log(say(process.argv[2]));
