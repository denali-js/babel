# denali-babel

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-image]][npm-url]
[![Standard Version][sv-image]][sv-url]

Transpile your Denali app using Babel.

## Installation

```sh
$ denali install denali-babel
```

## Configuring

By default, Babel does not do anything to your code - all transforms are opt-in. When you install
this addon, it will generate a recommended default `.babelrc` file at the root of your Denali app.
This file is how you tell Babel what transforms to apply, as well which files to exclude from
transformation.

For more details, check out [the Babel docs](https://babeljs.io/docs/usage/babelrc/).

## Caveats

Because not every planned feature of the JavaScript language can be perfectly transpiled to older
syntax, there are limitations to Babel's output.

One limitation in particular is important for Denali users. Denali makes heavy use of async/await
syntax, and the default `.babelrc` configuration includes support for that syntax. However,
Babel's implementation of async/await
[does not support `super` properly](https://github.com/babel/babel/issues/3930). So be aware that
any time you need to use `super`, you'll need to avoid async/await syntax.


[npm-url]: https://npmjs.org/package/denali-babel
[npm-image]: https://img.shields.io/npm/v/denali-babel.svg?style=flat-square

[travis-url]: https://travis-ci.org/denali-js/denali-babel
[travis-image]: https://img.shields.io/travis/denali-js/denali-babel/master.svg?style=flat-square

[coverage-url]: https://codeclimate.com/github/denali-js/denali-babel
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/denali-js/denali-babel.svg?style=flat-square

[depstat-url]: https://david-dm.org/denali-js/denali-babel
[depstat-image]: https://david-dm.org/denali-js/denali-babel/status.svg?style=flat-square

[download-image]: https://img.shields.io/npm/dm/denali-babel.svg?style=flat-square
