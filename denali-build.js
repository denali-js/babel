const { Builder } = require('denali-cli');
const fs = require('fs');
const path = require('path');
const MergeTree = require('broccoli-merge-trees');
const BabelTree = require('broccoli-babel-transpiler');
const Funnel = require('broccoli-funnel');

module.exports = class DenaliBabelBuilder extends Builder {

  processParent(tree, dir) {
    return new MergeTree([ tree, this.transpile(tree, dir) ], { overwrite: true });
  }

  transpile(tree, dir) {
    let babelrcPath = path.join(dir, '.babelrc');
    let options;
    if (fs.existsSync(babelrcPath)) {
      options = JSON.parse(fs.readFileSync(babelrcPath, 'utf-8'));
    } else {
      options = {
        plugins: [
          'transform-exponentiation-operator',
          'syntax-trailing-function-commas',
          'transform-es2015-arrow-functions',
          'transform-es2015-template-literals',
          'transform-es2015-spread',
          'transform-es2015-shorthand-properties',
          'transform-es2015-destructuring',
          'transform-class-properties',
          'transform-es2015-classes',
          'transform-es2015-modules-commonjs',
          'transform-regenerator',
          'syntax-async-functions',
          'transform-runtime'
        ],
        ignore: [
          'blueprints/*/files/**',
          'test/dummy/**'
        ]
      };
    }
    options.sourceMaps = 'inline';
    options.sourceRoot = dir;
    return new BabelTree(new Funnel(tree, { exclude: options.ignore }), options);
  }

};
