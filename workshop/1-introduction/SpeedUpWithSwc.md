# 🚀 Speed up with SWC

SWC is a super-fast JavaScript/TypeScript compiler built in Rust. It is often used as a drop-in replacement for Babel and tsc because it can compile code significantly faster.

## Why is SWC faster?

SWC is faster than Babel and TypeScript because it is built with Rust, a language designed for high performance. Additionally, SWC focuses only on the transformation and minification steps (converting TypeScript to JavaScript and making the JavaScript smaller). Type checking is not included in SWC's process, so it can be faster than TypeScript, which does both type checking and transpilation.

## How to Install and Use SWC with ts-node

> Reference: https://futurestud.io/tutorials/ts-node-use-swc-to-speed-up-typescript-code

In modern code bases you must install @swc/core as a project dependency. You can install it using NPM:

```bash
npm i -D @swc/core
```

In case your TypeScript target is below es2015 and you’re using async/await or generator function you must also install the regenerator-runtime package:

```bash
npm i -D @swc/core regenerator-runtime  
```

## Use ts-node with SWC

You can use the `--swc` flag in case `ts-node` is globally available on your machine. Append that flag and run the TypeScript file:

```bash
ts-node --swc server.ts  
```

You may also configure `ts-node` to use SWC in your tsconfig.json file. Specify a ts-node object at the root of your `tsconfig.json` and tell it to use SWC:

```json
{
  "ts-node": {
    "swc": true
  }
}
```

## Use it with Jest

> We won't cover it today, but if you want to learn more, here is the link: https://miyauchi.dev/posts/speeding-up-jest/

### TL;DR


```bash
npm i @swc/jest
```

jest.config.json
```json
{
  "transform": {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  }
}
```
