# rocambole-node-remove [![Build Status](https://travis-ci.org/sindresorhus/rocambole-node-remove.svg?branch=master)](https://travis-ci.org/sindresorhus/rocambole-node-remove)

> Remove a [rocambole](https://github.com/millermedeiros/rocambole) AST node


## Install

```bash
$ npm install --save rocambole-node-remove
```


## Usage

```js
var rocambole = require('rocambole');
var removeNode = require('rocambole-node-remove');

rocambole.moonwalk('if (true) { foo() }', function (node) {
	if (node.type === 'CallExpression') {
		removeNode(node);
	}
}).toString();
//=> if (true) {  }
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
