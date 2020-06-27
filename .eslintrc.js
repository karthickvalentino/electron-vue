module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: "standard",
  globals: {
    __static: true
  },
  plugins: ["html"],
  rules: {
    // allow paren-less arrow functions
    // "arrow-parens": 0,
    // allow async-await
    // "generator-star-spacing": 0,
    // allow debugger during development
    // "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   rules: {}
// };
