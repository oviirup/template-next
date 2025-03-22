import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import config_prettier from 'eslint-config-prettier';
import plugin_onlyWarn from 'eslint-plugin-only-warn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.Config[]} */
const config = [
  config_prettier,
  // next.js plugin
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  // base rules
  {
    plugins: {
      onlyWarn: plugin_onlyWarn,
    },
    rules: {
      'semi': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'eqeqeq': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'out/**', 'node_modules/**', '.next/**'],
  },
];

export default config;
