import { Blueprint } from 'denali-cli';

const packages = [
  'babel-preset-env',
  'babel-plugin-transform-class-properties'
];

export default class DenaliBabelBlueprint extends Blueprint {

  static blueprintName = 'denali-babel';
  static description = 'Generate the default .babelrc and install babel plugins';

  postInstall() {
    this.installPackages(packages, true);
  }

  postUninstall() {
    this.uninstallPackages(packages);
  }

}
