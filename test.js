import test from 'ava';
import rocambole from 'rocambole';
import m from '.';

test('remove a AST node', t => {
	const source = rocambole.moonwalk('if (true) { foo() }', node => {
		if (node.type === 'CallExpression') {
			m(node);
		}
	}).toString();

	t.is(source, 'if (true) {  }');
});
