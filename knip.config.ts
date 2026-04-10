import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
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
  ],
};

export default config;
