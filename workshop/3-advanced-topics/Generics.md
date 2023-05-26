# 🔤 Generics

## 🎯 So, let's try it live! [Go in the ts file](./generics.ts).

Generics is a powerful feature that allows you to write flexible and reusable code in TypeScript.

## Using Generics with Functions, Classes, and Interfaces

### Functions

With generics, you can write a function that can handle a variety of data types.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello World");
let output2 = identity<number>(100);
```

In the function `identity`, `T` is a placeholder for any type that the user will provide.

### Classes

Generics can also be applied to classes, specifically when dealing with structures like data containers where the type of data being stored is not known in advance.

```typescript
class DataContainer<T> {
    constructor(private data: T) {}

    getData(): T {
        return this.data;
    }
}

let stringContainer = new DataContainer<string>("Hello world");
let numberContainer = new DataContainer<number>(100);
```

### Interfaces

Generics and interfaces can work together to create highly flexible constructs.

```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Generic Constraints

You can use constraints to restrict the types that can be used with generics.

```typescript
interface HasLength {
    length: number;
}

function identity<T extends HasLength>(arg: T): T {
    console.log(arg.length);  // Now we know 'arg' has a '.length'
    return arg;
}

identity("Hello World");  // OK
identity(100);  // Error, '100' doesn't have a '.length'
```

In this case, the function `identity` works only on `arg` objects that have the `length` property.
