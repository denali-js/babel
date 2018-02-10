# denali-babel

[![CircleCI](https://img.shields.io/circleci/project/github/denali-js/denali-babel.svg?style=flat-square)](https://circleci.com/gh/denali-js/denali-babel)
[![Dependencies](https://img.shields.io/david/denali-js/denali-babel.svg?style=flat-square)](https://david-dm.org/denali-js/denali-babel)
[![npm downloads](https://img.shields.io/npm/dm/denali-babel.svg?style=flat-square)](https://www.npmjs.com/package/denali-babel)
![latest version](https://img.shields.io/npm/v/denali-babel.svg?style=flat-square)

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
