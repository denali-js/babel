const { AddonBuilder } = require('@denali-js/cli');
const fs = require('fs');
const path = require('path');
const MergeTree = require('broccoli-merge-trees');
const BabelTree = require('broccoli-babel-transpiler');
const Funnel = require('broccoli-funnel');
const debug = require('debug')('@denali-js/babel');

module.exports = class DenaliBabelBuilder extends AddonBuilder {

  processSelf(tree, dir) {
    return new MergeTree([ tree, this.transpile(tree, dir) ], { overwrite: true });
  }

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
        presets: [
          ["env", {
            targets: {
              node: "current"
            }
          }]
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
