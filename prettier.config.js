/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)",
    "^(react$)",
    "^(next/(.*)$)",
    "^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@showcase/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  // importOrderBuiltinModulesToTop: true,
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
