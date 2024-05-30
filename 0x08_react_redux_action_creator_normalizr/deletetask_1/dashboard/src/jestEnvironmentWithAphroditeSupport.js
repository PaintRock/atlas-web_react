const NodeEnvironment = require('jest-environment-node');
const aphroditeJestEnv = require('aphrodite/jest-environment');

class JestEnvironmentWithAphroditeSupport extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.document = aphroditeJestEnv.document;
    this.global.window = aphroditeJestEnv.window;
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = JestEnvironmentWithAphroditeSupport;
