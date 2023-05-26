# 🕵️‍♂️ Infer in TypeScript

One of the powerful features of TypeScript is the ability to use *infer* keyword inside conditional type checks. This gives TypeScript the ability to "extract" and use types in a variety of contexts, giving you a powerful tool in making your types dynamic and reusable.

## Explanation of conditional types and their use cases

Conditional types can be used to transform types based on conditions, allowing us to create powerful utility types.

### Transforming types based on conditions

Conditional types are introduced by the `extends` keyword and a conditional operator. For example, here's how you can create a conditional type that is either a `string` or `never` based on a condition:

```typescript
type StringOrNever<T> = T extends string ? T : never;
```

This type `StringOrNever` takes a generic type `T` and if `T` extends `string` (meaning it can be assigned to a `string`), then `StringOrNever<T>` is `T`, otherwise, it is `never`.

### Creating utility types

One common use of conditional types is to create utility types. For example, the `Partial<T>` utility type in TypeScript is defined as follows:

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

This type makes all properties in T optional.

### Infer is easier than you think

The `infer` keyword is used within the extends clause of a conditional type to infer a type within a conditional type. It basically allows you to extract and use types from function parameters and the types of properties of objects.

### Decode search params with TYPESCRIPT ONLY - Advanced TypeScript

Here's a complex but practical example. Let's say we want to write a function `parseQueryParams` that takes a search params string and returns an object with proper types inferred:

```typescript
type ParseQueryParams<S extends string> = 
    S extends `${infer Key}=${infer Value}&${infer Rest}`
        ? {[K in Key]: Value} & ParseQueryParams<Rest>
        : S extends `${infer Key}=${infer Value}`
            ? {[K in Key]: Value}
            : {};

let result: ParseQueryParams<"foo=1&bar=hello">;  // {foo: "1", bar: "hello"}
```

In this example, `ParseQueryParams` is a recursive type that parses a query string, and infers keys and values from it.

## Explanation of infer keyword and how to use it in conditional types

The `infer` keyword in TypeScript is used within conditional types to infer types in various contexts.

### Inferring types within conditional types

The `infer` keyword can be used within a conditional type to infer a type. Consider the following example:

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

Here, `ReturnType<T>` is a type that extracts the return type of a function type. If `T` can be assigned to a function type of the form `(...args: any[]) => infer R`, then `ReturnType<T>` is `R`.

### Extracting types from other types

The `infer` keyword can also be used to extract types from other types. For example, we can extract the types of the elements of an array type:

```typescript
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type T = ArrayElement<[number, string, boolean]>;  // number | string | boolean
```

Here, `ArrayElement<ArrayType>` is a type that extracts the element types of an array type. If

`ArrayType` is an array of some type, then `ArrayElement<ArrayType>` is the type of the array's elements.

### Fix ANNOYING OBJECT KEYS with infer and template literals

The infer keyword can be combined with template literal types to create some powerful abstractions. For example, you can create a type that removes a specific prefix from the keys of an object:

```typescript
type RemovePrefix<Prefix extends string, Keys extends string> =
    Keys extends `${Prefix}${infer Rest}` ? Rest : never;

type KeysWithoutPrefix<T extends Record<string, unknown>, Prefix extends string> = {
    [K in keyof T as RemovePrefix<Prefix, string & K>]: T[K];
};

type Foo = {
    "fooBar": number,
    "fooBaz": string,
    "qux": boolean
};

type Result = KeysWithoutPrefix<Foo, "foo">;  // {Bar: number, Baz: string, qux: boolean}
```

In this example, `KeysWithoutPrefix<T, Prefix>` is a type that removes a prefix from the keys of an object. It uses the `infer` keyword to infer the rest of the key after the prefix.
