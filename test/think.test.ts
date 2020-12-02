import { think } from '../src';

// think
test('think with nothing', () => {
  // @ts-expect-error test
  expect(() => think()).toThrow(/no text provided/i);
});

test('think with only text', () => {
  expect(() => think('moo')).not.toThrow();
});

test('think with only options', () => {
  expect(() => think({ text: 'moo' })).not.toThrow();
  // @ts-expect-error test
  expect(() => think({})).toThrow(/no text provided/i);
});
