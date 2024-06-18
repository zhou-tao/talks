---
# try also 'default' to start simple
theme: seriph
themeConfig:
  primary: '#06b6d4'
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: CLI
info: false
# author field for exported PDF or PPTX
author: 周涛
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-up
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# CLI-命令行工具

<br/><br/>
<div v-click v-motion
  :initial="{ x: -30 }"
  :enter="{ x: 0 }">
一、 基本概念<br/><br/>
二、 执行机制<br/><br/>
三、 简单实现
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/zhou-tao/talks/tree/main/CLI" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: slide-left
layout: section
class: text-center
---

# 基本概念

<style>
h1 {
  background-color: #22d3ee;
  background-image: linear-gradient(45deg, #22d3ee 0%, #146b8c 60%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-left
---

# CLI 是什么

命令行界面（英语全称：Command-line interface）是在图形用户界面得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。

- Shell CLI： 这是最常见的 CLI 类型。它从键盘获取命令并使用该命令与操作系统交互。例如，Unix/Linux 操作系统的 Bash 和 Windows 操作系统的 Powershell/命令提示符。

- 开发 CLI： 软件开发框架和工具通常带有自己的 CLI，需要安装在您的计算机系统上。这些 CLI 专门设计用于为开发人员提供特定于框架的命令，使其可以轻松地编译代码、运行测试、管理依赖项以及执行各种与开发相关的任务。示例包括NPM、GIT等。

- 数据库 CLI： 此 CLI 提供特定命令，允许用户执行 SQL 查询、执行数据操作操作以及控制数据库结构。一些示例包括MySQL CLI、SQLite CLI 和MongoDB CLI。

- 终端仿真器 CLI： 此 CLI 使用户能够通过网络连接连接到远程计算机或服务器。它模拟终端界面，显示命令提示符并允许用户在远程计算机上执行命令。PuTTY和OpenSSH等 SSH 客户端就是其中的一些示例。

---
transition: slide-left
---

# 为什么需要 CLI

CLI-命令行工具的功能特性主要包括以下几点

1. 任务自动化： CLI 可以自动执行任务。CLI 允许您键入命令来帮助您自动执行任务，从而腾出时间来专注于其他重要任务，从而提高效率和生产力，而不是通过单击鼠标并专注于单个活动来执行重复性任务。

2. 快速响应时间： CLI 快速执行任务和命令。与 GUI 不同，当用户已经熟悉命令时，它需要的时间更少。

3. 资源更少：在资源有限的情况下，使用 CLI 可以很方便，可以帮助您执行任务，而无需依赖其他资源来导航或单击图标、按钮和菜单来完成工作。

4. 专业感：使用 CLI 会给您一种专业感，因为开发人员、系统管理员和程序员等专业人士都是使用 CLI 的人。

---
transition: slide-up
---

# 常见 CLI 前端工具

<div class="my12 grid grid-cols-3 gap-y-8 text-7xl">
  <logos-vue />
  <logos-create-react-app />
  <devicon-vitejs />
  <logos-webpack />
  <logos-eslint />
  <devicon-typescript />
</div>

- 全局安装：vue-cli、create-react-app
- 独立安装：webpack、eslint、typescript
- 无需安装：vite

---
transition: slide-left
layout: section
class: text-center
---

# 执行机制

<style>
h1 {
  background-color: #22d3ee;
  background-image: linear-gradient(45deg, #22d3ee 0%, #146b8c 60%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-left
layout: image-right
image: /node_modules-bin.png
---

# npm run 执行流程
npm scripts 执行步骤

1. 安装

```bash
npm install eslint -D
```
<br>

2. 配置

```json
{
  "scripts": {
    "eslint:fix": "eslint . --fix"
  }
}

```
<br>

3. 使用

```bash
npm run eslint:fix
```

---
transition: slide-left
---

# npm run 执行流程

流程图

<img src="/npm-run_process.awebp" width="80%">

---
transition: slide-left
---

# 全局执行

> 在终端中输入任意指令后，系统查找处理流程为：当前目录下 -> 环境变量目录下

<div class="grid grid-cols-2 grid-flow-row gap-4 mt8">
<h3>Windows</h3>
<h3>Mac OS</h3>
<img src="/env-paths_windows.png">
<img src="/env-paths_mac.png">
</div>

<br>

当node安装完成后，npm全局目录./bin会被自动设置成环境变量。

---
transition: slide-up
layout: two-cols
---

# npm create

<br>

### 使用 [vue-cli](https://cli.vuejs.org/zh/)
<br>

```bash
# 安装
npm i -g @vue/cli

# 使用
vue create vue-app
```

<br>

### 使用 [vite](https://vitejs.dev/)
<br>

```bash
npm create vite vite-app --template vue
```

注意：npm create 是 npm init 的别名。

::right::

<v-click>

<br>

### npm init 官方定义
<br>

> `npm init <initializer>` 可用于设置新的或现有的 npm 包。

在这种情况下，initializer 是一个名为 `create-<initializer>` 的 npm 包，它将由 npx 安装，然后执行其主 bin —— 大概是创建或更新 package.json 并运行任何其他与初始化相关的操作。

init命令转化为对应的npx操作如下：

- npm init foo -> npx create-foo
- npm init @usr/foo -> npx @usr/create-foo
- npm init @usr -> npx @usr/create

任何附加选项都将直接传递给命令，因此 npm init foo --hello 将映射到 npx create-foo --hello。

</v-click>

---
transition: slide-left
layout: section
class: text-center
---

# 代码实现

<style>
h1 {
  background-color: #22d3ee;
  background-image: linear-gradient(45deg, #22d3ee 0%, #146b8c 60%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-left
layout: two-cols
---

# CLI Package 基础

思考：node_modules/.bin 下的可执行文件怎么生成的？

<v-click>

[vue-cli package.json](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/package.json)

```json {all|5-7}
{
  "name": "@vue/cli",
  "version": "5.0.8",
  "description": "Command line interface for rapid Vue.js development",
  "bin": {
    "vue": "bin/vue.js"
  },
  "types": "types/index.d.ts",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vue-cli.git",
    "directory": "packages/@vue/cli"
  },
  "keywords": [
    "vue",
    "cli"
  ],
  // ...
}
```
</v-click>

::right::
<v-click>

package.json 中 bin 定义：

> 许多包都有一个或多个可执行文件，他们希望将它们安装到 PATH 中。要使用它，可在 package.json 中提供一个 bin 字段，它是命令名称到本地文件名的映射。当全局安装此包时，该文件将链接到全局 bin 所在的位置，因此可以按名称运行。

以 myapp 为例：

```json
{
  "name": "myapp",
  "bin": {
    "myapp": "./cli.js"
  }
}
```

- 当执行 `npm install myapp` 后，即可在 node_modules/.bin 目录下生成名为 myapp 的可执行文件。

- 当执行 `npm install -g myapp` 全局安装后，myapp 将在npm全局bin目录下生成。
</v-click>

---
transition: slide-left
---

# CLI Package 基础

思考：js文件可以直接执行吗？怎样让js变成可执行？

<v-click>

### 可执行文件标识符

<br>

```js
#!/usr/bin/env node

```

<br>

- `#!`：在Linux或者Unix中叫做 [Shebang](https://zh.wikipedia.org/wiki/Shebang)（也称为Hashbang）。通常在Unix系统的基本中第一行开头中出现，用于指明这个脚本文件的解释程序。
- `/usr/bin/env`：指定执行环境的全局安装目录。
- `node`: 代表使用的执行器类型为node。
</v-click>

---
transition: slide-left
---

# CLI 开发工具库 - commander

commander 可以用来描述你的命令行界面，并负责将参数解析为选项和命令参数。

```bash
$ vue
Usage: vue <command> [options]

Options:
  -V, --version                              output the version number
  -h, --help                                 output usage information

Commands:
  create [options] <app-name>                create a new project powered by vue-cli-service
  add [options] <plugin> [pluginOptions]     install a plugin and invoke its generator in an already created project
  invoke [options] <plugin> [pluginOptions]  invoke the generator of a plugin in an already created project
  inspect [options] [paths...]               inspect the webpack config in a project with vue-cli-service
  serve [options] [entry]                    serve a .js or .vue file in development mode with zero config
  build [options] [entry]                    build a .js or .vue file in production mode with zero config
  ui [options]                               start and open the vue-cli ui
  init [options] <template> <app-name>       generate a project from a remote template
  config [options] [value]                   inspect and modify the config
  outdated [options]                         (experimental) check for outdated vue cli service / plugins
  upgrade [options] [plugin-name]            (experimental) upgrade vue cli service / plugins
  migrate [options] [plugin-name]            (experimental) run migrator for an already-installed cli plugin
  info                                       print debugging information about your environment

```

---
transition: slide-left
---

# CLI 开发工具库 - commander

```js
const { program } = require('commander')

// 配置命令行工具名称、版本号、基础用法
program
  .name('demo')
  .version(`@cli/demo ${require('./package').version}`)
  .usage('<command> [options]')

// 定义一个 create 命令
program
  .command('create <app-name>')
  .description('create a new project')
  .action((name) => {
    console.log(`TODO: create project ${name}`)
  })

// 解析命令行参数入口
program.parse(process.argv)
```
<br>

```bash
$ pnpm demo create my-project

TODO: create project my-app

```

---
transition: slide-left
layout: two-cols
---

# CLI 开发工具库 - inquirer

vue-cli 初始化项目的询问选项

<br>

<img src="/vue-cli-prompts.png" width="95%">

::right::

```js
const inquirer = require('inquirer')

// 在 add 命令内部（详见packages/demo/index.js）
inquirer.prompt([
  {
    type: 'list',
    name: 'name',
    message: '请选择需要添加的插件',
    choices: ['pluginA', 'pluginB', 'pluginC']
  },
  {
    type: 'input',
    name: 'directory',
    message: '请输入添加的目标目录路径'
  },
  // more...
]).then(answer => {
  console.log('prompts answer:', answer)
})
```

```bash
$ pnpm demo add

? 请选择需要添加的插件 (Use arrow keys)
> pluginA
  pluginB
  pluginC

```

---
transition: slide-left
layout: two-cols
---

# CLI 开发工具库 - chalk

```js
const chalk = require('chalk')

// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));

```

::right::

<img src="/chalk-demo.png" width="100%" class="mt14 ml4">

---
layout: center
class: text-center
---

# Thank You

[GitHub](https://github.com/zhou-tao/talks/CLI)
