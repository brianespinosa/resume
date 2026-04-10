import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
    // Git hook runner — used via lefthook.yml, not imported in code.
    'lefthook',
    // Imported via @import url('normalize.css') in src/app/global.scss.
    // knip does not parse SCSS files.
    'normalize.css',
    // Imported via @import url('@picocss/pico') in src/app/global.scss.
    // knip does not parse SCSS files.
    '@picocss/pico',
  ],
  ignoreBinaries: [
    // Used via npx sort-package-json in lefthook.yml.
    'sort-package-json',
    // Used via yarn playwright install in CI and locally.
    'playwright',
  ],
};

export default config;
