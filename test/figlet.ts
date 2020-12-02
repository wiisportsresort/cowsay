import { textSync } from 'figlet';

import * as cowsay from '../src';

const text = textSync('Success', { font: 'Slant' });

console.log(cowsay.say(text, { nowrap: true }));
