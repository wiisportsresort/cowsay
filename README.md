# @wiisportsresorts/cowsay

This is a fork of https://github.com/johnnysprinkles/cowsay, which in turn takes from
https://github.com/piuccio/cowsay. This package is a Typescript version of the modernized version of the original.

**⚠️ Warning: 0.x release. Expect breaking API changes.**

### Example

With import:

```js
import { say, think } from '@wiisportsresorts/cowsay';

import { nyan, ibm } from '@wiisportsresorts/cowsay/lib/cows';
// or
import { nyan } from '@wiisportsresorts/cowsay/lib/cows/nyan';

say('foo bar', {
  cow: nyan,
});

think({
  text: 'foo bar',
  cow: ibm,
  W: 90, // wrap column
});
```

With require:

```js
const cowsay = require('@wiisportsresorts/cowsay');

const { nyan, ibm } = require('@wiisportsresorts/cowsay/lib/cows');
// or
const { nyan } = require('@wiisportsresorts/cowsay/lib/cows/nyan');

cowsay.say('foo bar', { cow: ibm });

cowsay.think({
  text: 'foo bar',
  cow: nyan,
  W; 100,
})
```
