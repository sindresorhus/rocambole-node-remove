'use strict';
var assert = require('assert');
var rocambole = require('rocambole');
var removeNode = require('./index');

it('should remove a AST node', function () {
	var str = rocambole.moonwalk('if (true) { foo() }', function (node) {
		if (node.type === 'CallExpression') {
			removeNode(node);
		}
	}).toString();

	assert.strictEqual(str, 'if (true) {  }');
});
