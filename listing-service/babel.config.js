module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#roor": "./src",
        },
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
