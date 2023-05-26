# 🧠 Type Inference

Type inference is a powerful feature in TypeScript that makes it easier for developers to write and maintain code by reducing the amount of explicit type annotations they need to add.

## 🎯 So, let's try it live! [Go in the ts file](./type-inference.ts).

## Automatic Type Inference

TypeScript can automatically infer the type of a variable from the type of its initial value. This means you often don't need to explicitly provide types, because TypeScript can figure it out for you.

```typescript
let num = 10;  // TypeScript infers `num` is a `number`
let str = "Hello";  // TypeScript infers `str` is a `string`
```

In the above examples, TypeScript can automatically infer the type of variables `num` and `str` based on the assigned initial values.

Similarly, TypeScript can infer the return type of functions:

```typescript
function sum(a: number, b: number) {
    return a + b;
}

// TypeScript infers that `result` is a `number`
let result = sum(10, 20);
```

## Type Assertions

Sometimes you might know more about a value than TypeScript can. In these cases, you can use a type assertion to specify a more specific or different type.

Type assertions are like type casts in other languages, but there is no runtime impact - they are purely a compile-time construct. There are two syntaxes for type assertions: `as`-syntax and `angle-bracket`-syntax.

```typescript
let someValue: any = "this is a string";

// `as`-syntax
let strLength: number = (someValue as string).length;

// `angle-bracket`-syntax
let strLength2: number = (<string>someValue).length;
```

In the example above, the `someValue` variable is of type `any`. By using a type assertion, you can treat `someValue` as a `string` and access the `length` property, which is specific to the `string` type.
