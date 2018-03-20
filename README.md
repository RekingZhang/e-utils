# e-utils

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

## 其他

### 1、打包时抛出 Unexpected token

原因是 e-utils 的 js 源码为 ES2015 编写，没进行 babel 转译，可以在 webpack 配置中的增加以下 loaders：

```javascript
{
	test: /e-utils.lib.*?js$/,
	loader: "babel-loader"
}
```
