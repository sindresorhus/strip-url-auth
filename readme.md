# strip-url-auth [![Build Status](https://travis-ci.org/sindresorhus/strip-url-auth.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-url-auth)

> Strip the [authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) part of a URL


## Install

```
$ npm install strip-url-auth
```


## Usage

```js
const stripUrlAuth = require('strip-url-auth');

stripUrlAuth('https://user:pass@sindresorhus.com');
//=> 'https://sindresorhus.com'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
