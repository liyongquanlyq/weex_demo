创建时间：2018-06
项目环境：
➜  awesome-app git:(master) ✗ weex -v
   v1.3.8
 - weexpack : v1.2.4
 - weex-debugger : v1.0.19
 - weex-builder : v0.4.0
 - weex-previewer : v1.5.1
参考: https://github.com/zwwill/yanxuan-weex-demo

# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).