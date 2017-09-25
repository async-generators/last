# last
![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)

get the last (predicated) item from a source iterable

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Travis Status][codecov-image]][codecov-url]

## Usage

_package requires a system that supports async-iteration, either natively or via down-compiling_

### Install
```
npm install @async-generators/parallel --save
yarn add @async-generators/parallel
```

This package's `main` entry points to a `commonjs` distribution. 

Additionally, the `module` entry points to a `es2015` distribution, which can be used by build systems, such as webpack, to directly use es2015 modules. 

## Api

### last(source [,predicate])

<code>last()</code> iterates `source` and returns the last item where `predicate(item) == true`. if `predicate` is `undefined` then it simply returns the last item of the sequence. if `source` contains no items, or `predicate()` always returns false, then `last()` returns `undefined`.

`source` must have a `[Symbol.asyncIterator]` or `[Symbol.iterator]` property. If both are present only `[Symbol.asyncIterator]` is used. 

## Example

example.js
```js
const last = require('@async-generators/last').default;

async function* source() {
  yield 1; yield 2; yield 3; yield 4;
}

async function main() {
  console.log(await last(source(), x => x < 4>));
}

main();

```

Execute with the latest node.js: 

```
node --harmony-async-iteration example.js
```

output:
```
3
```
## Typescript

This library is fully typed and can be imported using: 

```ts
import last from '@async-generators/last');
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration example.ts
```

[npm-url]: https://npmjs.org/package/@async-generators/last
[npm-image]: https://img.shields.io/npm/v/@async-generators/last.svg
[npm-downloads]: https://img.shields.io/npm/dm/@async-generators/last.svg
[travis-url]: https://travis-ci.org/async-generators/last
[travis-image]: https://img.shields.io/travis/async-generators/last/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/last
[codecov-image]: https://codecov.io/gh/async-generators/last/branch/master/graph/badge.svg
