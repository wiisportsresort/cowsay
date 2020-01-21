# cowsay
Modernized version of cowsay

This is a fork of https://github.com/piuccio/cowsay with these improvements:

* No reading files at runtime. Cows are declared as static compile-time dependencies.
* Works the same whether client-side or server-side, and whether running from
  raw source for from a transpiled bundle.
* Leveraging modern language features like destructuring and arrow functions.
* Update to more modern Javascript style with two-space indents, single quoted
  strings, and `const` and `let` instead of `var`, as you might see on the Google
  or airbnb JS style guides.

### Usage

See test/example.js for examples, but the basic usage is:

    cowsay.say('What you want to say');

Or pass some options:

    cowsay.say('Advanced', { cow: someCow, mode: 'paranoid' });
    cowsay.say('A quick brown fox jumped over the lazy dog', { W: 15 });
    cowsay.think('I\'m looking sideways', { e: 'cc' });

Get a demo of all available cows with `node test/cows.js`, and get a demo of all
available modes with `node test/modes.js`. Get a general test demonstrating line wrapping
and whitespace handling at `node test/example.js`.
