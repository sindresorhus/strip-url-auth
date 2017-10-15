'use strict';
module.exports = str => {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(/^((?:\w+:)?\/\/)(?:[^@/]+@)/, '$1');
};
