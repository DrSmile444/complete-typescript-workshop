# 🗺️ Mapped Types

Mapped types are a powerful TypeScript feature that allows you to create new types based on existing ones, by transforming properties in a certain way.

## 🎯 So, let's try it live! [Go in the ts file](./mapped-types.ts).

## Creating new types based on existing ones

You can use mapped types to create a new type with the same keys as an existing type, but with different value types. The `Readonly`, `Partial`, and `Pick` utilities provided by TypeScript are examples of mapped types.

Here's an example of how you can create your own mapped type that makes all properties of the original type optional:

```typescript
type Optional<T> = {
    [P in keyof T]?: T[P];
};

interface MyType {
    prop1: number;
    prop2: string;
}

type MyOptionalType = Optional<MyType>;
// equivalent to
// interface MyOptionalType {
//     prop1?: number;
//     prop2?: string;
// }
```

## Key Remapping

TypeScript 4.1 introduced the ability to remap keys in mapped types. The `as` keyword is used to create a new property name:

```typescript
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;
// equivalent to
// interface LazyPerson {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }
```

In this example, `Getters` is a mapped type that creates a new type where each property `K` in `T` is transformed into a getter method.
