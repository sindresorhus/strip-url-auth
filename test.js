import test from 'ava';
import stripUrlAuth from './index.js';

test('main', t => {
	t.is(stripUrlAuth('http://user:pass@sindresorhus.com'), 'http://sindresorhus.com');
	t.is(stripUrlAuth('https://user:pass@sindresorhus.com'), 'https://sindresorhus.com');
	t.is(stripUrlAuth('//user:pass@sindresorhus.com'), '//sindresorhus.com');
	t.is(stripUrlAuth('http://user@sindresorhus.com'), 'http://sindresorhus.com');
	t.is(stripUrlAuth('http://sindresorhus.com/@foo'), 'http://sindresorhus.com/@foo');
	t.is(stripUrlAuth('http://sindresorhus.com'), 'http://sindresorhus.com');
});
