# 🕵️ The `strict` Option in `tsconfig.json`

The `strict` option in your `tsconfig.json` file enables a wide range of type checking behavior to detect more potential issues in your code. Essentially, it's a convenience option that turns on a group of settings at once. When you set `"strict": true`, you enable the following options:

1. `noImplicitAny`
2. `noImplicitThis`
3. `alwaysStrict`
4. `strictBindCallApply`
5. `strictNullChecks`
6. `strictFunctionTypes`
7. `strictPropertyInitialization`

Here's a breakdown of what each option does, with examples:

## `noImplicitAny`

This option raises an error when the TypeScript compiler cannot infer the type of a value and defaults it to `any`.

```typescript
function logSomething(s) {  // Error: Parameter 's' implicitly has an 'any' type.
  console.log(s);
}
```

## `noImplicitThis`

When `this` is used in a function that is not a method or a constructor, it's type is `any`, unless `"noImplicitThis": true`.

```typescript
function logThis() {
  console.log(this);  // Error: 'this' implicitly has type 'any' because it does not have a type annotation.
}
```

## `alwaysStrict`

This option ensures your code is parsed in strict mode, and all emitted code also uses strict mode.

## `strictBindCallApply`

This option enables stricter checking of the `bind`, `call`, and `apply` methods on functions.

```typescript
function foo(a: number, b: string): string {
  return a + b;
}

let a = foo.call(null, "hello", "world");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

## `strictNullChecks`

In JavaScript, `null` and `undefined` are effectively interchangeable. `"strictNullChecks": true` makes TypeScript treat them as distinct types.

```typescript
let a: number;
a = null;  // Error: Type 'null' is not assignable to type 'number'.
```

## `strictFunctionTypes`

This option makes the checking of function types more correct, especially regarding how `this` types and parameter types are checked.

```typescript
interface Foo {
  bar(x: string): number;
}

let foo: Foo = {
  bar(x: number) {  // Error: Types of property 'bar' are incompatible.
    return x * 2;
  }
};
```

## `strictPropertyInitialization`

This option ensures that each instance property of a class gets initialized in the constructor body, or by a property initializer.

```typescript
class C {
  foo: number;  // Error: Property 'foo' has no initializer and is not definitely assigned in the constructor.
}
```

Overall, the `strict` option can help you catch a lot of potential bugs and make your TypeScript code more robust. It's generally a good idea to enable it if you can.

---

## 🎯 So, let's try it live! [Go in the ts file](./strict-in-typescript.ts).
