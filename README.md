# e-utils

[![npm version](https://img.shields.io/npm/v/e-utils.svg?style=flat-square)](https://www.npmjs.org/package/e-utils)
[![Build Status](https://travis-ci.org/RekingZhang/e-utils.svg?branch=master)](https://travis-ci.org/RekingZhang/e-utils)
[![Coverage Status](https://coveralls.io/repos/github/RekingZhang/e-utils/badge.svg?branch=master)](https://coveralls.io/github/RekingZhang/e-utils?branch=master)

> 前端常用函数工具库

## 安装

### NPM

```sh
npm install e-utils  --save
```

或

### CDN

```javascript
<script src="https://unpkg.com/e-utils/dist/e-utils.min.js" />
```

## 使用

导入需要的工具库，例如：

```javascript
import { Cookie } from 'e-utils';
```

如果使用的是 CDN 引入，所有的工具方法挂载在全局变量 `eutils` 下面

```javascript
eutils.Cookie.set('k', 'v');
```

## 按需加载

如需实现按需加载，可以通过以下两种方式实现：

直接引入 lib 包中的指定文件

```javascript
import Cookie from 'e-utils/lib/cookie';
```

或

通过配合 babel-plugin-import 插件使用

```sh
npm install babel-plugin-import --save-dev
```

在.babelrc 文件添加如下配置

```json
{
	"plugins": [
		[
			"import",
			{
				"libraryName": "e-utils",
				"libraryDirectory": "lib"
			}
		]
	]
}
```
