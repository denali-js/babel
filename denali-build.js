import { Builder } from 'denali';
import fs from 'fs';
import path from 'path';
import BabelTree from 'broccoli-babel-transpiler';

export default class DenaliBabelBuilder extends Builder {

  processSelf(tree, dir) {
    return this.transpile(tree, dir);
  }

  processParent(tree, dir) {
    return this.transpile(tree, dir);
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
    return new BabelTree(tree, options);
  }

}
