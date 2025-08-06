import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import config_prettier from 'eslint-config-prettier';
import plugin_onlyWarn from 'eslint-plugin-only-warn';
import plugin_reactCompiler from 'eslint-plugin-react-compiler';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  config_prettier,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  plugin_reactCompiler.configs.recommended,
  {
    plugins: {
      onlyWarn: plugin_onlyWarn,
    },
    rules: {
      // disable some strict typescript rules
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      // custom rules
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'eqeqeq': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'semi': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'out/**', 'node_modules/**', '.next/**'],
  },
];

export default config;
