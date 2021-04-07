export default function stripUrlAuth(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(/^((?:\w+:)?\/\/)[^@/]+@/, '$1');
}
