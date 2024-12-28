module.exports = function (api) {
  const isWeb = process.env.TARGET === 'web';
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
      // !isWeb && '@react-native/babel-preset' // Only use this for mobile
    ].filter(Boolean)
  };
};
