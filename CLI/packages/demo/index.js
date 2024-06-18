#!/usr/bin/env node

const { program } = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

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

// 定义一个 add 命令
program
  .command('add')
  .description('add a new plugin')
  .action(() => {
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
      {
        type: 'confirm',
        name: 'confirm',
        message: '确认填写无误？'
      }
    ]).then(answer => {
      console.log('prompts answer:', answer)
    })
  })

program
  .command('chalk')
  .description('chalk practice')
  .action(() => {
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

    // ES2015 template literal
    console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);

    // Use RGB colors in terminal emulators that support it.
    console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
    console.log(chalk.hex('#DEADED').bold('Bold gray!'))
  })
// 解析命令行参数入口
program.parse(process.argv)