# 🧩 Why to use never and unknown types?

TypeScript provides us with a few unique types that can help to manage exceptional or unusual cases - `never` and `unknown`. They are useful in certain circumstances and understanding them can help us write safer and more robust code.

## 🎯 So, let's try it live! [Go in the ts file](./never-unknown.ts).

## Explanation and use cases for never type

The `never` type in TypeScript represents a type of values that never occur. It is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

### Functions that never return

Functions that do not have a return statement implicitly have the return type `void`. But if a function never returns because it throws an error or enters an infinite loop, it has the return type `never`.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

In the above code, `throwError` never finishes execution, hence its return type is `never`.

### Exhaustive type checking

The `never` type can be used for exhaustive type checking, to ensure that all cases of a union type have been handled:

```typescript
type Direction = 'north' | 'east' | 'south' | 'west';

function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}

function printDirection(direction: Direction) {
    switch (direction) {
        case 'north':
            console.log('North');
            break;
        case 'east':
            console.log('East');
            break;
        case 'south':
            console.log('South');
            break;
        case 'west':
            console.log('West');
            break;
        default:
            assertNever(direction);  // If we forget a case, this line will make TypeScript throw a compile-time error.
    }
}
```

## Explanation and use cases for unknown type

The `unknown` type is a safer alternative to the `any` type. It represents a type of values that we do not know about at design time.

### Safer alternative to any

An `unknown` variable cannot be assigned to any other type (without using a type assertion or a type guard), and no operations are allowed on it, nor can it be accidentally misused. This makes it a much safer alternative to `any`.

```typescript
let value: unknown;

let value1: string = value;  // Error
value.foo.bar;  // Error
value();  // Error
new value();  // Error
```

### Type narrowing and type guards

To use an `unknown` value, we'll need to narrow its type to a more specific one. This is usually done using some form of type checking (type guards):

```typescript
let value: unknown;

if (typeof value === "string") {
    console.log(value.toUpperCase());  // OK, value is narrowed to string
}

if (typeof value === "number") {
    console.log(value.toFixed(2));  // OK, value is narrowed to number
}
```

In these examples, `typeof value` is a type guard that checks the type of `value` and narrows it within its scope.
