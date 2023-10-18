module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        },
        stage: 3,
      },
    ],
  ]
}