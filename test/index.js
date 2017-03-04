const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('frozen-config', function () {
  describe('所有提示的值都为真时：', function () {
    before('创建一个用于测试的　yeoman 执行上下文', function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          editorconfig: true,
          eslint: true,
          stylelint: true,
          typescript: true,
          tslint: true,
          iconfont: true,
          gitignore: true,
        });
    });

    it('所需配置文件是否都已生成', function () {
      assert.file([
        '.editorconfig',
        '.eslintrc',
        '.stylelintrc',
        'tsconfig.json',
        'tslint.json',
        './css/font.css',
        '.gitignore',
      ]);
    });
  });

  describe('所有提示的值都为假时：', function () {
    before('创建一个用于测试的　yeoman 执行上下文', function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          editorconfig: false,
          eslint: false,
          stylelint: false,
          typescript: false,
          tslint: false,
          iconfont: false,
          gitignore: false,
        });
    });

    it('无需生成任何配置文件', function () {
      assert.noFile([
        '.editorconfig',
        '.eslintrc',
        '.stylelintrc',
        'tsconfig.json',
        'tslint.json',
        './css/font.css',
        '.gitignore',
      ]);
    });
  });
});
