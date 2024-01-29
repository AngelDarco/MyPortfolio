// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
  },
  overrides: {
    rules: {
      "array-bracket-spacing": ["error", "always"],
      // ... other rules}
    },
  },
};
