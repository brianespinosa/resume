import { inspect } from 'node:util';
import '@testing-library/jest-dom';
import { afterEach, beforeEach, vi } from 'vitest';

const serialize = (...args: unknown[]) =>
  args
    .map((a) => (typeof a === 'string' ? a : inspect(a, { depth: 3 })))
    .join(' ');

// Fail tests on unexpected console.warn/error. Tests that intentionally trigger
// these (e.g. testing an error branch) must mock console.error/warn explicitly
// within that test, which overrides this global mock for the duration of that test.
beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    throw new Error(`Unexpected console.warn: ${serialize(...args)}`);
  });
  vi.spyOn(console, 'error').mockImplementation((...args) => {
    throw new Error(`Unexpected console.error: ${serialize(...args)}`);
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});
