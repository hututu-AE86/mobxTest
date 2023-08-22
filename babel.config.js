module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    // 其他插件...
  ]
};
