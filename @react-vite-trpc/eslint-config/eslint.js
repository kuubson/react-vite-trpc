module.exports = {
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
   ignorePatterns: ['node_modules', '.turbo', 'dist', 'dev-dist', 'coverage'],
   rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-return-await': ['error'],
      'prefer-destructuring': ['error'],
      'object-shorthand': ['error'],
      'no-unneeded-ternary': ['error'],
      'prefer-template': ['error'],
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
         'error',
         {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
         },
      ],
      'object-curly-newline': [
         'warn',
         {
            ObjectExpression: {
               multiline: true,
               minProperties: 2,
            },
         },
      ],
   },
}
