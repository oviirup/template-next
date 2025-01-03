import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import config_prettier from 'eslint-config-prettier';
import plugin_onlyWarn from 'eslint-plugin-only-warn';
import plugin_tailwind from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  config_prettier,
  // next.js plugin
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  // tailwindcss plugin
  ...plugin_tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['clsx', 'cn', 'cva'],
        classRegex: '^(class|\\w+Class)Name$',
      },
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
