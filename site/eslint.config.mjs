import js from "@eslint/js";
import react from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import { createRequire } from "node:module";

// eslint-plugin-react's `version: "detect"` calls context.getFilename(), which
// ESLint 10 removed, so resolve the installed React version here instead.
const reactVersion = createRequire(import.meta.url)("react/package.json").version;

export default [
  {
    ignores: [
      "**/*.test.js",
      "src/utils/",
      ".cache/",
      ".github/",
      "assets/",
      "public/",
    ],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
        ...globals.es2015,
      },
    },
    settings: {
      react: {
        version: reactVersion,
      },
    },
    rules: {
      "block-scoped-var": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "React" }],
      "strict": "off",
      "valid-typeof": "off",

      "react/display-name": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-no-duplicate-props": "off",

      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/comma-style": "error",
      "@stylistic/indent": [
        "error", 2, {
          FunctionExpression: { parameters: "first" },
          FunctionDeclaration: { parameters: "first" },
          MemberExpression: 1,
          SwitchCase: 1,
          outerIIFEBody: 0,
          VariableDeclarator: { var: 2, let: 2, const: 3 },
          ignoredNodes: ["TemplateLiteral"],
        },
      ],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "@stylistic/keyword-spacing": "error",
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-unary-ops": ["warn", { words: true, nonwords: false }],
    },
  },
];
