import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "migrations/**",
      "seeders/**",
      "config/**",
      "node_modules/**"
    ]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
    plugins: {
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  }
]);
