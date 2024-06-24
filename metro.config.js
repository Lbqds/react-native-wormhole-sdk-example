const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      stream: require.resolve('readable-stream'),
      assert: require.resolve('assert')
    }
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
