import { FlatCompat } from '@eslint/eslintrc';
import eslintConfig from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import { fileURLToPath } from 'node:url';
import { dirname } from 'pathe';

const eslintrc = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
});

const tsEsLintConfig = {
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
  },
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  languageOptions: {
    parser: tsEslintParser,
    parserOptions: {
      project: true,
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    ...tsEslintPlugin.configs['eslint-recommended'].overrides[0].rules,
    // '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
  }
}

export default [
  {
    ignores: ['**/dist/**/*', '**/node_modules/*'],
  },
  eslintConfig.configs.recommended,
  tsEsLintConfig,
  ...eslintrc.extends('plugin:vue/vue3-recommended'),
  eslintConfigPrettier,
]
