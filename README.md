# svg-mask-error
Run the project:
1. yarn i
2. react-native run-ios


The example project has been created using the following steps:

1. Create a new project and install `react-native-svg` and `react-native-svg-transformer`:
```
react-native init CleanProject
cd CleanProject/
yarn add react-native-svg
yarn add --dev react-native-svg-transformer
cd ios && pod install && cd ..
```

2. Add the following `metro.config.js` file:
```
// metro.config.js
const {getDefaultConfig} = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

3. Run the app by running `react-native run-ios`
4. Watch the pixelated SvgWithMask and the non-pixelated SvgWithoutMask
