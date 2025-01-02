// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// const config = getDefaultConfig(__dirname);

// // Add `.svg` to source extensions
// config.resolver.sourceExts.push('svg');

// // Configure the transformer for `.svg` files
// config.transformer = {
//   ...config.transformer,
//   babelTransformerPath: require.resolve('react-native-svg-transformer')
// };

// // Exclude `.svg` from being treated as an asset
// config.resolver = {
//   assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
//   sourceExts: [...config.resolver.sourceExts, 'svg']
// };

// module.exports = withNativeWind(config, { input: './global.css' });

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// // Get the default Metro config
// const defaultConfig = getDefaultConfig(__dirname);

// // Get the resolver and transformer configurations
// const {
//   resolver: { sourceExts, assetExts }
// } = defaultConfig;

// // Start creating the custom config
// const config = {
//   // Merge transformer configuration to use 'react-native-svg-transformer'
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true
//       }
//     }),
//     babelTransformerPath: require.resolve('react-native-svg-transformer')
//   },
//   resolver: {
//     // Remove SVG from the asset extensions so it can be handled as a source file
//     assetExts: assetExts.filter((ext) => ext !== 'svg'),
//     // Add SVG as a source extension
//     sourceExts: [...sourceExts, 'svg']
//   }
// };

// // Combine the default configuration with the custom config
// const combinedConfig = mergeConfig(defaultConfig, config);

// // Apply nativewind configuration for global CSS support
// module.exports = withNativeWind(combinedConfig, { input: './global.css' });

//
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add `.svg` to the source extensions (so Metro knows to handle them as source files)
config.resolver.sourceExts.push('svg');

// Configure the transformer for `.svg` files
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer')
};

// Exclude `.svg` from being treated as an asset
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== 'svg'
);

// Apply nativewind configuration for global CSS support
module.exports = withNativeWind(config, { input: './global.css' });
