const assert = require('assert');
const domkit = require('../dist/domkit.cjs');
const { JSDOM } = require('jsdom');

const testExpectToThrow = () => {
	assert.throws(domkit);
};

const testNoConfiguration = () => {
	global.window = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>').window;
	const { document } = domkit();
	const element = document.createElement('div');
	const text = document.createTextNode('Test');
	element.appendChild(text);
	document.body.appendChild(element);
	assert.equal(document.body.children[0].innerHTML, 'Test');
};

const testWithConfiguration = () => {
	global.window = new JSDOM('<!DOCTYPE html><html><head></head><body><p>Nope</p></body></html>').window;
	const { document } = domkit();
	const element = document.createElement('div');
	const text = document.createTextNode('Test');
	element.appendChild(text);
	document.body.appendChild(element);
	assert.equal(document.body.children[0].innerHTML, 'Nope');
	assert.equal(document.body.children.length, 2);
	assert.equal(document.body.children[1].innerHTML, 'Test');
};

testExpectToThrow();
testNoConfiguration();
testWithConfiguration();
