import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { JSDOM } from 'jsdom';
const { window } = new JSDOM();
global.window = window;
// Mock the alert function
window.alert = vi.fn();

afterEach(() => {
  cleanup();
});

