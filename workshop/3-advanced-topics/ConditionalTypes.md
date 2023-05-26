# ❓ Conditional Types

Conditional types are a powerful feature in TypeScript that enable the expression of complex type relationships that cannot be expressed with other, simpler types.

## 🎯 So, let's try it live! [Go in the ts file](./conditionalTypes.ts).

## Basic Syntax and Usage

Conditional types take a form that looks a little like conditional (ternary) expressions in JavaScript: `T extends U ? X : Y`.

In simple words, this expression means "If `T` is assignable to `U`, then the type is `X`, otherwise the type is `Y`".

```typescript
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<number>;  // "number"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<{}>;  // "object"
```

In this example, `TypeName` is a conditional type that maps types to a string literal type describing the type.

## Distributive Conditional Types

Conditional types in which the checked type is a naked type parameter are called distributive conditional types. This means they are distributed over union types in the checked position:

```typescript
type Diff<T, U> = T extends U ? never : T;

type T10 = Diff<"a" | "b" | "c", "a" | "f">;  // "b" | "c"
```

In this example, `Diff` is a distributive conditional type that filters out (`never`) any member of `T` that is assignable to `U`. When `Diff` is applied to a union type, it is distributed over the members of the union, and the resulting type is a union of each individual application of `Diff`. Thus `Diff<"a" | "b" | "c", "a" | "f">` simplifies to `"b" | "c"`.
