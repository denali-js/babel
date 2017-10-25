# denali-babel

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-image]][npm-url]

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


[npm-url]: https://npmjs.org/package/denali-babel
[npm-image]: https://img.shields.io/npm/v/denali-babel.svg?style=flat-square

[travis-url]: https://travis-ci.org/denali-js/denali-babel
[travis-image]: https://img.shields.io/travis/denali-js/denali-babel/master.svg?style=flat-square

[coverage-url]: https://codeclimate.com/github/denali-js/denali-babel
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/denali-js/denali-babel.svg?style=flat-square

[depstat-url]: https://david-dm.org/denali-js/denali-babel
[depstat-image]: https://david-dm.org/denali-js/denali-babel/status.svg?style=flat-square

[download-image]: https://img.shields.io/npm/dm/denali-babel.svg?style=flat-square
