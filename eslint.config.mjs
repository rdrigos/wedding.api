import eslint from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts}'],
  ignores: ['dist/**', 'node_modules/**'],
  languageOptions: {
    globals: globals.node,
  },
  plugins: {
    prettier: eslintPluginPrettier,
  },
  extends: [eslint.configs.recommended, tseslint.configs.recommended],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
});
