import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// vitest 5 dropped JestAssertion extends jest.Matchers and made Matchers<R, T>
// two-generic, so @testing-library/jest-dom 7.0.1 types no longer reach expect().
declare module 'vitest' {
  interface Matchers<
    R extends void | Promise<void> = void | Promise<void>,
    T = unknown,
  > extends TestingLibraryMatchers<unknown, R> {}
}
