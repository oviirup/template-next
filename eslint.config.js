import { FlatCompat } from '@eslint/eslintrc';
import plugin_onlyWarn from 'eslint-plugin-only-warn';
import plugin_reactCompiler from 'eslint-plugin-react-compiler';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
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
      'semi': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'eqeqeq': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    ignores: ['node_modules/**', 'out/**', 'build/**', '.next/**'],
  },
];

export default config;
