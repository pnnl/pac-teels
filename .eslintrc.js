//@ts-ignore
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"]
  },
  plugins: ["svelte3", "@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3"
    }
  ],
  settings: {
    "svelte3/typescript": true,
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte3/ignore-styles": () => true
  },
  ignorePatterns: [
    "node_modules",
    ".eslintrc.js",
    ".gitignore",
    ".prettierignore",
    ".package.json",
    "package.json",
    "package-lock.json",
    ".env",
    ".eslintignore"
  ],
  rules: {
    "no-undef": "off",
    "no-use-before-define": "off",
    "no-console": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-redeclare": "off",
    "import/no-unresolved": "off",
    "spaced-comment": "off",
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "no-empty": "off",
    "lines-between-class-members": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "prettier/prettier": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/restrict-plus-operands": "off"
  }
};
