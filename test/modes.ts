import * as cowsay from '../src';

const modes = [
  'borg',
  'dead',
  'greedy',
  'paranoid',
  'stoned',
  'tired',
  'wired',
  'youthful',
];

modes.forEach(mode => {
  console.log(cowsay.say(`Test of ${mode} cow.`, { mode }));
});
