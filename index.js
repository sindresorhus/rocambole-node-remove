'use strict';
const token = require('rocambole-token');

module.exports = node => {
	token.eachInBetween(node.startToken, node.endToken, token.remove);
};
