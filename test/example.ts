import { say, think } from '../src';
import { bearface, cat, cat2 } from '../src/cows';

console.log(say('moo out loud!'));
console.log(think('moo to myself!'));
console.log(think('Maui Wowee', { mode: 'stoned' }));
console.log(think('Starbucks', { mode: 'wired' }));
console.log(
  say(
    "The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template strings, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not."
  )
);
console.log(
  say(
    `Foo
       bar
               baz`,
    { nowrap: true }
  )
);
console.log(
  say(
    `Foo
       bar
               baz`,
    { nowrap: false }
  )
);

console.log(say('Meow', { cow: cat }));
console.log(say('Meow', { cow: cat2 }));
console.log(say('Feed me campers', { cow: bearface }));

// Empty string
console.log(say(''));
