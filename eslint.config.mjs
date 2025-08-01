import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import perfectionist from 'eslint-plugin-perfectionist';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * @type {import("eslint").Linter.Config[]}
 * */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintConfigPrettier,
  {
    ...perfectionist.configs['recommended-natural'],
    rules: {
      'perfectionist/sort-classes': [
        'error',
        {
          partitionByComment: true,
          type: 'natural',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^@/.*'],
          type: 'natural',
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      // or configure rules individually
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 120 }],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/globals.css',
      },
    },
  },
];

export default eslintConfig;
