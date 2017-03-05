# generator-frozen-config

通常在开发中会用到很多的工具，如`editorconfig`、`eslint`、`stylelint`等等。大多数的工具都需要有配置文件。
而这个生成器就是用来自动生成常用工具的配置文件。

目前有一下一些简单的配置文件：
- .editorconfig
- .eslintrc
- .stylelintrc
- tsconfig.json
- tslint.json
- font.css([iconfont](http://www.iconfont.cn/))
- .gitignore(nodejs)

# 使用方法
```shell
# 没有安装yeoman的话，需要先安装。
npm i -g yo

# 安装generator-frozen-config。
npm i -g nice-body/generator-frozen-config

# 以上都安装完毕后就可以直接使用了。
yo frozen-config
```

# 许可

MIT
