module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
    "plugins": [
      ["transform-inline-environment-variables", {
        "include": [
          "NODE_ENV"
        ]
      }]
    ]
  };
};
