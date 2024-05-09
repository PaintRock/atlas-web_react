module.exports = {
  transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};