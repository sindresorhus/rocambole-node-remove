# rocambole-node-remove [![Build Status](https://travis-ci.org/sindresorhus/rocambole-node-remove.svg?branch=master)](https://travis-ci.org/sindresorhus/rocambole-node-remove)

> Remove a [rocambole](https://github.com/millermedeiros/rocambole) AST node


## Install

```
$ npm install --save rocambole-node-remove
```


## Usage

```js
const rocambole = require('rocambole');
const removeNode = require('rocambole-node-remove');

rocambole.moonwalk('if (true) { foo() }', node => {
	if (node.type === 'CallExpression') {
		removeNode(node);
	}
}).toString();
//=> 'if (true) {  }'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
