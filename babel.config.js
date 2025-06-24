module.exports = function (api) {
  api.cache(true);
  // let plugins = [];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.png'],
          alias: {
            '~': './src',
            '@': './',
          },
        },
      ],
    ],
  };
};
