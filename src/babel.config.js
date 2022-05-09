module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        corejs: 3,
        targets: {
          browsers: ["last 2 Chrome versions"],
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/proposal-class-properties",
    ["@babel/plugin-transform-runtime", { regenerator: true, corejs: 3 }],
  ],
};
