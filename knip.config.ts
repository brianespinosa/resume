import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
    // Imported via @import url('normalize.css') in src/app/global.scss.
    // knip does not resolve dependencies out of SCSS files.
    'normalize.css',
    // Imported via @import url('@picocss/pico') in src/app/global.scss.
    // knip does not resolve dependencies out of SCSS files.
    '@picocss/pico',
  ],
  ignoreUnresolved: [
    // Since knip 6.30 the SCSS parser reports @import url() targets as
    // unresolved imports. The package resolves through its "main" field
    // (css/pico.min.css), which knip's resolver does not follow.
    './@picocss/pico',
  ],
};

export default config;
