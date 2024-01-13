module.exports = {
  extends: ["turbo", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {},
  plugins: ["react"],
};
