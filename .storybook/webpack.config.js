module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.md?$/,
      loader: 'markdown-loader',
    },
    {
      test: /\.tsx?$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/env', '@babel/typescript', '@vue/jsx'],
      },
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
