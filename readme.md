# strip-url-auth

> Strip the [authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) part of a URL

## Install

```
$ npm install strip-url-auth
```

## Usage

```js
import stripUrlAuth from 'strip-url-auth';

stripUrlAuth('https://user:pass@sindresorhus.com');
//=> 'https://sindresorhus.com'
```
