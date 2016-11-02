import { Builder } from 'denali';
import fs from 'fs';
import path from 'path';
import BabelTree from 'broccoli-babel-transpiler';

export default class DenaliBabelBuilder extends Builder {

  processSelf(tree) {
    return this.transpile(tree);
  }

  processParent(tree) {
    return this.transpile(tree);
  }

  transpile(tree) {
    let babelrcPath = path.join(this.dir, '.babelrc');
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
    return new BabelTree(tree, options);
  }

}
