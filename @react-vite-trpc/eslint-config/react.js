module.exports = {
   extends: ['./eslint', 'plugin:react/recommended'],
   settings: { react: { version: '18.2.0' } },
   rules: {
      '@typescript-eslint/ban-types': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/react-in-jsx-scope': 'off',
   },
}
