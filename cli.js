#!/usr/bin/env node

const cowsay = require('./index');

console.log(cowsay.say(process.argv[2]));
