## 🎯 So, let's try it live! [Go in the ts file](./functions.ts).

## Type Annotations for Function Parameters and Return Types

In TypeScript, you can add type annotations to function parameters and return types to enforce type safety.

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Usage
const greeting = greet('Alice');
console.log(greeting); // Hello, Alice!
```

In this example, the `greet` function accepts a parameter `name` of type `string` and returns a value of type `string`. If you try to call `greet` with a non-string parameter, TypeScript will show an error.

## Optional and Default Parameters

TypeScript supports optional parameters, which allow arguments to be omitted when calling a function. To make a parameter optional, append a question mark (`?`) to the parameter's name.

```typescript
function greet(name?: string): string {
  if (name === undefined) {
    return 'Hello, stranger!';
  }

  return `Hello, ${name}!`;
}

// Usage
console.log(greet('Bob')); // Hello, Bob!
console.log(greet()); // Hello, stranger!
```

In addition to optional parameters, TypeScript also supports default parameters. If a function caller omits a parameter that has a default value, TypeScript will use the default value instead.

```typescript
function greet(name = 'stranger'): string {
  return `Hello, ${name}!`;
}

// Usage
console.log(greet('Charlie')); // Hello, Charlie!
console.log(greet()); // Hello, stranger!
```

## Function Overloads

Function overloading is a feature that allows you to create multiple functions with the same name but different parameter types and return types. TypeScript can pick the correct function to call based on the types of the arguments.

```typescript
// These are the function overload signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// This is the function implementation
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    throw new Error('Invalid types for combine function');
}

// Usage
console.log(combine(5, 10)); // 15
console.log(combine('Hello, ', 'TypeScript')); // 'Hello, TypeScript'
```

In this example, `combine` has two overloads: one that works with strings, and one that works with numbers. TypeScript chooses the correct overload based on the argument types. If the arguments don't match any overload, TypeScript will show an error.
