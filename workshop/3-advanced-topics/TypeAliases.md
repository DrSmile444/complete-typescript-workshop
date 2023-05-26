# 🆔 Type Aliases

Type aliases are a way to give a new name to a type. Type aliases work with any kind of type including primitives (except null and undefined), unions and intersections types, and user-defined types.

## 🎯 So, let's try it live! [Go in the ts file](./type-aliases.ts).

## Defining and using type aliases

You can define a type alias using the `type` keyword:

```typescript
type Point = {
    x: number;
    y: number;
};

// Now Point can be used as a type:
const pt: Point = {
    x: 10,
    y: 20
};
```

## The power of literal types in TypeScript (Advanced TypeScript)

Literal types are a powerful feature in TypeScript that allow you to specify the exact value a type must have. In the context of type aliases, literal types can be used to define a type that can only have a specific set of values:

```typescript
type Direction = 'north' | 'east' | 'south' | 'west';

function move(direction: Direction) {
    // ...
}

move('north');  // OK
move('northeast');  // Error: Argument of type '"northeast"' is not assignable to parameter of type 'Direction'.
```

In this example, `Direction` is a literal type that can only have one of four specific string values.

## Creating a function with autocomplete that returns literals

Literal types in combination with type aliases can be used to create functions with autocomplete that return specific literals. For example, you can create a function that returns a direction:

```typescript
type Direction = 'north' | 'east' | 'south' | 'west';

function getDirection(): Direction {
    // 'north' is autocompleted in editors with TypeScript support
    return 'north';
}
```

In this example, TypeScript knows that the `getDirection` function returns a `Direction` type, and editors with TypeScript support can autocomplete the return value.
