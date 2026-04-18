import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: [
      "node_modules/**",
      "**/*.test.js",
      "src/utils/**",
      ".cache/**",
      ".github/**",
      "assets/**",
      "public/**",
      ".babelrc",
      ".env.development",
      "CNAME",
      "CODE_OF_CONDUCT.md",
      "CODEOWNERS",
      "font-preload-cache.json",
      "LICENSE",
      "Makefile",
      "README.md",
      "package.json",
      "package-lock.json",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          presets: ["babel-preset-gatsby"],
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        module: "writable",
        require: "readonly",
        exports: "writable",
        __dirname: "readonly",
        __filename: "readonly",
        define: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "array-bracket-spacing": ["error", "never"],
      "comma-style": ["error"],
      "arrow-spacing": [
        "error",
        {
          after: true,
          before: true,
        },
      ],
      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": ["error", "1tbs"],
      "jsx-quotes": ["error", "prefer-double"],
      "keyword-spacing": "error",
      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "React",
        },
      ],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "react/display-name": 0,
      "react/prop-types": 0,
      "react/no-unescaped-entities": [0],
      "react/jsx-no-duplicate-props": [0],
      indent: [
        "error",
        2,
        {
          FunctionExpression: { parameters: "first" },
          FunctionDeclaration: { parameters: "first" },
          MemberExpression: 1,
          SwitchCase: 1,
          outerIIFEBody: 0,
          VariableDeclarator: { var: 2, let: 2, const: 3 },
          ignoredNodes: ["TemplateLiteral"],
        },
      ],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      strict: 0,
      "valid-typeof": 0,
      "space-unary-ops": [
        1,
        {
          words: true,
          nonwords: false,
        },
      ],
      "space-infix-ops": ["error"],
    },
  },
];
