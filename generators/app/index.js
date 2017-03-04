const fs = require('fs');
const path = require('path');
const Generator = require('yeoman-generator');
const request = require('request');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // 工具的基本信息
    this.tools = {
      editorconfig: {
        fileName: '.editorconfig',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/.editorconfig',
        destination: './',
      },
      eslint: {
        fileName: '.eslintrc',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/.eslintrc',
        destination: './',
      },
      stylelint: {
        fileName: '.stylelintrc',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/.stylelintrc',
        destination: './',
      },
      typescript: {
        fileName: 'tsconfig.json',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/tsconfig.json',
        destination: './',
      },
      tslint: {
        fileName: 'tslint.json',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/tslint.json',
        destination: './',
      },
      iconfont: {
        fileName: 'font.css',
        source: 'https://raw.githubusercontent.com/nice-body/miscellaneous/master/font.css',
        destination: './css',
      },
      gitignore: {
        fileName: '.gitignore',
        source: 'https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore',
        destination: './',
      },
    };

    // 用于存放用户选择的结果
    this.answers = [];
  }

  prompting() {
    return this.prompt([
      {
        type: 'confirm',
        name: 'editorconfig',
        message: 'create .editorconfig file',
        default: true,
      }, {
        type: 'confirm',
        name: 'eslint',
        message: 'create .eslintrc file',
        default: true,
      }, {
        type: 'confirm',
        name: 'stylelint',
        message: 'create .stylelintrc file',
        default: false,
      }, {
        type: 'confirm',
        name: 'typescript',
        message: 'create tsconfig.json file',
        default: false,
      }, {
        type: 'confirm',
        name: 'tslint',
        message: 'create tslint.json file',
        default: false,
      }, {
        type: 'confirm',
        name: 'iconfont',
        message: 'create font.css file',
        default: false,
      }, {
        type: 'confirm',
        name: 'gitignore',
        message: 'create node .gitignore file',
        default: true,
      },
    ]).then((answers) => {
      for (const tool in this.tools) {
        if (answers[tool] === true) {
          this.answers.push(tool);
        }
      }
    });
  }

  configuring() {
    for (const answer of this.answers) {
      // 判断目标目录是否存在
      fs.access(this.destinationPath(this.tools[answer].destination), (err) => {
        if (err) {
          fs.mkdir(this.destinationPath(this.tools[answer].destination), () => {
            request(this.tools[answer].source).pipe(fs.createWriteStream(this.destinationPath(path.join(this.tools[answer].destination, this.tools[answer].fileName))));
          });
        } else {
          request(this.tools[answer].source).pipe(fs.createWriteStream(this.destinationPath(path.join(this.tools[answer].destination, this.tools[answer].fileName))));
        }
      });
    }
  }
};
