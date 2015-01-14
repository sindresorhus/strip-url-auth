'use strict';
var test = require('ava');
var stripUrlAuth = require('./');

test(function (t) {
	t.assert(stripUrlAuth('http://user:pass@sindresorhus.com') === 'http://sindresorhus.com');
	t.assert(stripUrlAuth('https://user:pass@sindresorhus.com') === 'https://sindresorhus.com');
	t.assert(stripUrlAuth('//user:pass@sindresorhus.com') === '//sindresorhus.com');
	t.assert(stripUrlAuth('http://user@sindresorhus.com') === 'http://sindresorhus.com');
	t.assert(stripUrlAuth('http://sindresorhus.com') === 'http://sindresorhus.com');
	t.end();
});
