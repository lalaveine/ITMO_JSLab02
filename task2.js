#!/usr/bin/node

var crypto = require('crypto');

var string1 = "some text"
var string2 = "some other text"

var string1hash = crypto.createHash('md5').update(string1).digest('hex');
var string2hash = crypto.createHash('md5').update(string2).digest('hex');

console.log("%s - %s", string1, string1hash);
console.log("%s - %s", string2, string2hash);
