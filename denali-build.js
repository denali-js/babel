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
        presets: [ 'latest' ],
        plugins: [
          'transform-class-properties',
          'transform-async-to-generator'
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
