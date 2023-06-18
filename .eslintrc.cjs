module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ "eslint:recommended", "plugin:react/recommended" ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [ "react" ],
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: [ "warn", 2 ],
    "object-curly-spacing": [ "warn", "always" ],
    "array-bracket-spacing": [ "warn", "always" ],
    "linebreak-style": [ "error", "unix" ],
    quotes: [ "warn", "double" ],
    semi: [ "error", "always" ],
  },
  globals: {
    // "someModule": true, //disable module is not defined
  },
};
