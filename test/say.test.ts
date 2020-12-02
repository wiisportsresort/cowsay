import { say } from '../src';

// say
test('say with nothing', () => {
  // @ts-expect-error test
  expect(() => say()).toThrow(/no text provided/i);
});

test('say with only text', () => {
  expect(() => say('moo')).not.toThrow();
});

test('say with only options', () => {
  expect(() => say({ text: 'moo' })).not.toThrow();
  // @ts-expect-error test
  expect(() => say({})).toThrow(/no text provided/i);
});
