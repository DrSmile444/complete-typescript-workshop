# 🔀 Union and Intersection Types

In TypeScript, you often want to describe types where you have a set of properties with specific types. Union and Intersection types are powerful ways to express such relationships between types.

## 🎯 So, let's try it live! [Go in the ts file](./unionAndIntersectionTypes.ts).

## Combining and Intersecting Types

### Union Types

A union type describes a value that can be one of several types. You can combine multiple types using the `|` (pipe) symbol.

```typescript
type StringOrNumber = string | number;

let variable: StringOrNumber;

variable = "Hello";  // OK
variable = 100;  // OK
variable = true;  // Error
```

### Intersection Types

An intersection type combines multiple types into one. It allows you to merge existing types to get a type that has all the required features. You can create an intersection type using the `&` symbol.

```typescript
type FirstType = {
    prop1: number;
};

type SecondType = {
    prop2: string;
};

type CombinedType = FirstType & SecondType;

let variable: CombinedType = {
    prop1: 100,
    prop2: "Hello"
};
```

## Discriminated Unions

Discriminated unions, also known as tagged unions, are a feature in TypeScript that allows you to create a type that could be one of several types, but can still be easily disambiguated between each other.

Here's an example:

```typescript
type Circle = {
    kind: "circle";
    radius: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
```

In this example, `Shape` is a discriminated union type and `kind` is the discriminant.

## Removing a Member of a Union Type

Sometimes you may want to remove certain types from a Union Type. You can do this by using conditional types.

```typescript
type StringOrNumber = string | number;

type JustString = Exclude<StringOrNumber, number>;

let variable: JustString;

variable = "Hello";  // OK
variable = 100;  // Error
```

In this example, the `Exclude` utility type constructs a type by excluding from `StringOrNumber` all members that are assignable to `number`, resulting in `JustString` being just `string`.
