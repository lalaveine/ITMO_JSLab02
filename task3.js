#!/usr/bin/node

/** @const {string} */ const hiWord = 'Hello';

/**
 * возвращает приветствие
 * принимает строку или ничто, в случае ничто возвращает безымянное приветвие
 */
function sayHello(name='Nameless') {
	return `${hiWord}, ${name}!`;
}

console.log(sayHello());
console.log(sayHello(name='John'));
