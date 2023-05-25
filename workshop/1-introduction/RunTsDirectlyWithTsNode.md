# 🏃‍♂️ Run TS directly with ts-node

`ts-node` is a tool for TypeScript and Node.js that allows you to directly run TypeScript code and REPL in Node.js, without a separate compilation step.

## Benefits

The main benefit of `ts-node` is the ability to execute TypeScript code directly, similar to how you might use Node.js to run JavaScript code. Here's how it helps:

1. __Simplifies the development process:__ Without `ts-node`, you would need to first compile your TypeScript code to JavaScript using the TypeScript compiler (`tsc`), and then use Node.js to run the resulting JavaScript. With `ts-node`, you can do both in one step.

2. __Supports REPL:__ Like Node.js, `ts-node` also provides a REPL that you can use for quick testing and experimentation. However, unlike the Node.js REPL, the `ts-node` REPL allows you to write TypeScript directly.

3. __Integrates with other tools:__ `ts-node` can also be used with other tools that expect to run JavaScript code. For instance, you can use `ts-node` with `mocha` for testing TypeScript code directly.

## Install

You can install `ts-node` using the Node Package Manager (`npm`) or Yarn, which are both included with Node.js. Before installing `ts-node`, make sure you have Node.js and npm/Yarn installed on your system.

To install `ts-node` globally (which means you can use it from any directory), you can use the following command:

**npm**

```bash
npm install -g ts-node
```

To install `ts-node` locally for a specific project (which is generally a good practice), navigate to your project's directory and use the following command:

**npm**

```bash
npm install --save-dev ts-node
```

After installing `ts-node`, you can use it to run TypeScript files directly:

```bash
ts-node myfile.ts
```

Note: If you've installed `ts-node` locally, you may need to use `npx` before `ts-node` to run your TypeScript files:

```bash
npx ts-node myfile.ts
```

Remember, `ts-node` also requires the TypeScript compiler to work, so ensure you have `typescript` installed as a dev dependency in the same way.

## Production Use

Although `ts-node` is a great tool for development, it is generally not recommended for production use. There are a few reasons for this:

1. __Performance:__ `ts-node` compiles your TypeScript code to JavaScript on the fly, every time it's run. This can add significant overhead compared to running precompiled JavaScript.

2. __Type-checking:__ By default, `ts-node` does not perform type checks. This means that it will run TypeScript code even if the code has type errors that would be caught by the TypeScript compiler. While you can enable type checking with the `--type-check` option, this adds further to the performance overhead.

In general, for production use, it's recommended to precompile your TypeScript code to JavaScript using the TypeScript compiler, and then use Node.js to run the resulting JavaScript. This gives you the full benefits of TypeScript's static typing during development, while avoiding the runtime overhead of on-the-fly compilation.

Overall, `ts-node` is a valuable tool for TypeScript development, especially for running scripts, tests, and quick experiments. However, due to its performance characteristics, it's best used only in development environments.

## If you still want to use in production

There are ways to mitigate performance impact:

### Transpile-Only Mode

Use the `--transpile-only` flag or the `TS_NODE_TRANSPILE_ONLY` environment variable. This will make `ts-node` skip type-checking, which can reduce the compilation time significantly. Note that this means you're missing out on one of the main benefits of TypeScript, which is the type-checking. Make sure you've thoroughly type-checked your code at build time.

```bash
ts-node --transpile-only script.ts
```

Or

```bash
TS_NODE_TRANSPILE_ONLY=true ts-node script.ts
```

### Compiler Options

Use the `--compiler-options` flag to pass options to the TypeScript compiler. For example, you can disable certain checks or enable faster but less accurate settings:

```bash
ts-node --compiler-options '{"isolatedModules":true,"noEmit":true}' script.ts
```

### Caching

`ts-node` does support caching compiled TypeScript code between runs, which can help speed up execution. You can control the cache location with the `--cache-directory` flag or the `TS_NODE_CACHE_DIRECTORY` environment variable. By default, `ts-node` will cache compiled code in `node_modules/.cache/ts-node/`.

```bash
ts-node --cache script.ts
```

### Use a Bundle Tool

You could use a bundler tool that supports TypeScript, like webpack or Rollup, to precompile your entire application into a single JavaScript bundle during your build process. This would eliminate the need for `ts-node` in your production environment.

---

However, remember that these are stop-gap solutions. The best practice is to precompile TypeScript to JavaScript for production environments. By precompiling, you can utilize all of TypeScript's features, including full type-checking, without incurring the performance penalty of on-the-fly compilation.
