# 📑 Enumerations

## 🎯 So, let's try it live! [Go in the ts file](./enums.ts).

## Numeric and String Enums

Enums (short for enumerations) are a new data type that allow for a collection of related values that can be numeric or string-based.

Numeric enums have auto-incrementing behavior.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);    // 0
console.log(Direction.Down);  // 1
console.log(Direction.Left);  // 2
console.log(Direction.Right); // 3
```

String enums do not have auto-incrementing behavior. They have to be initialized with a string value.

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up);    // UP
console.log(Direction.Down);  // DOWN
console.log(Direction.Left);  // LEFT
console.log(Direction.Right); // RIGHT
```

## Readonly Enums

In TypeScript, `const enum` is a special kind of enum. The `const` enums can't be modified and are completely removed during compilation. This leads to better performance of your program.

```typescript
const enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Directions.Up);    // UP
console.log(Directions.Down);  // DOWN
console.log(Directions.Left);  // LEFT
console.log(Directions.Right); // RIGHT
```

Remember, you won't be able to declare properties or methods inside a `const enum` because they are purely a compile-time construct.

Note: If you try to inspect `Directions` object in runtime, you'll notice that it doesn't exist. This is because `const enum` are completely removed during compilation and all usages are replaced with the actual enum value.
