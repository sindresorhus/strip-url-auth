import test from 'ava';
import m from '.';

test(t => {
	t.is(m('http://user:pass@sindresorhus.com'), 'http://sindresorhus.com');
	t.is(m('https://user:pass@sindresorhus.com'), 'https://sindresorhus.com');
	t.is(m('//user:pass@sindresorhus.com'), '//sindresorhus.com');
	t.is(m('http://user@sindresorhus.com'), 'http://sindresorhus.com');
	t.is(m('http://sindresorhus.com/@foo'), 'http://sindresorhus.com/@foo');
	t.is(m('http://sindresorhus.com'), 'http://sindresorhus.com');
});
