# 🚧 Types

TypeScript supports a variety of data types that are similar to JavaScript, including primitive types and object types.

## 🎯 So, let's try it live! [Go in the ts file](./types.ts).

## Primitive Types

### Boolean

`boolean` represents a logical value. It can hold either true or false.

```typescript
let isDone: boolean = false;
```

### Number

`number` represents numeric values. TypeScript supports integers and floating-point numbers. It also supports binary and octal literals.

```typescript
let decimal: number = 6;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### String

`string` represents a series of characters. TypeScript supports single quotes, double quotes, and template literals for strings.

```typescript
let color: string = "blue";
color = 'red';
let sentence: string = `My favorite color is ${color}.`;
```

### Symbol

`symbol` represents a unique identifier.

```typescript
let sym1 = Symbol();
let sym2: symbol = Symbol("key"); // optional string key
```

### Void

`void` is used to indicate the absence of a type. It's often used as the return type of functions that do not return a value.

```typescript
function warnUser(): void {
    console.log("This is a warning message");
}
```

### Null and Undefined

`null` and `undefined` are similar to void, representing the absence of a value.

```typescript
let u: undefined = undefined;
let n: null = null;
```

## Object Types

### Array

`array` is a collection of values of the same type.

```typescript
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic array type
```

### Tuple

`tuple` represents an array where the type of a fixed number of elements is known but need not be the same.

```typescript
let x: [string, number] = ['hello', 10]; // Tuple
```

### Enum

`enum` is a way of giving more friendly names to sets of numeric values.

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Any

`any` represents any type at all. It's a way to opt-out of type checking.

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Unknown

`unknown` type is like `any` but safer, as you can't assign `unknown` to any other type (unless you do type assertion).

```typescript
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Never

`never` is a type that represents values that never occur. For instance, a function that always throws an error never returns a value.

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

### Object

`object` is a type that represents any non-primitive type.

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
```
