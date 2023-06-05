const common = [
  'src/tests/features/**/*.feature',          // Specify the path to your feature files
  '--require-module ts-node/register',        // Load TypeScript module
  '--require src/tests/step-definitions/**/*.ts',  // Load step definition files
  '--format progress-bar',                    // Load custom formatter
].join(' ');

module.exports = {
  default: common
};