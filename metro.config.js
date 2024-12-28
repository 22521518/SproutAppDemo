const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add `.svg` to source extensions
config.resolver.sourceExts.push('svg');

// Configure the transformer for `.svg` files
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer')
};

// Exclude `.svg` from being treated as an asset
config.resolver = {
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg']
};

module.exports = withNativeWind(config, { input: './global.css' });
