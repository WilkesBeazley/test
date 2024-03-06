// .eslintrc.js initialize
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["html", "@html-eslint"],
  rules: {
    "@html-eslint/indent": ["error", 2], // fix conflict between html-eslint and prettier
    "@html-eslint/no-extra-spacing-attrs": [
      "error",
      {
        enforceBeforeSelfClose: true, // fix conflict between html-eslint and prettier
      },
    ],
    "@html-eslint/require-closing-tags": [
      "error",
      {
        selfClosing: "always", // fix conflict between html-eslint and prettier
      },
    ],
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
};
