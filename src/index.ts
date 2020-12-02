import * as balloon from './balloon';
import { default_cow } from './cows';
import { getFace } from './faces';
import { CowOptions } from './types';

export type { CowFace, CowFunction, CowOptions } from './types';

const DEFAULT_COLUMNS = 40;

function doIt(text: string, options: CowOptions = {}, action: 'say' | 'think') {
  const nowrap = options.n || options.nowrap;
  const wrapWidth = nowrap ? undefined : options.W || DEFAULT_COLUMNS;
  const filledBalloon = balloon[action](text, wrapWidth);

  const cow = options.cow || default_cow;
  const { eyes, tongue } = getFace(options);

  const filledCow = cow({
    thoughts: action == 'say' ? '\\' : 'o',
    eyes,
    tongue,
    eye: eyes[0],
  });

  return filledBalloon + filledCow;
}

export function say(text: string, options?: CowOptions): string;
export function say(options: CowOptions & { text: string }): string;
export function say(
  arg1: string | (CowOptions & { text: string }),
  options: CowOptions = {}
): string {
  if (!arg1) throw new Error('No text provided.');
  const text = typeof arg1 === 'string' ? arg1 : arg1.text;
  const opts = typeof arg1 === 'string' ? options : arg1;
  if (!text) throw new Error('No text provided.');
  return doIt(text, opts, 'say');
}

export function think(text: string, options?: CowOptions): string;
export function think(options: CowOptions & { text: string }): string;
export function think(
  arg1: string | (CowOptions & { text: string }),
  options: CowOptions = {}
): string {
  if (arg1 == null) throw new Error('No text provided.');
  const text = typeof arg1 === 'string' ? arg1 : arg1.text;
  const opts = typeof arg1 === 'string' ? options : arg1;
  if (text == null) throw new Error('No text provided.');
  return doIt(text, opts, 'think');
}
