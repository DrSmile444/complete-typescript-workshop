# 📛 The `noUncheckedIndexedAccess` Option in TypeScript

> You can watch more about it here:
> 
> Youtube - Matt Pocock - ["noUncheckedIndexedAccess" - the BEST config option you've never heard of
](https://www.youtube.com/watch?v=JwZaP3pY7Zo)

The `noUncheckedIndexedAccess` option was introduced in TypeScript 4.1 to add a level of type safety to indexed access operations.

When this option is enabled in your `tsconfig.json`, every property or element access expression that could potentially result in `undefined` will have `undefined` included in its type.

In simpler terms, if you try to access an array or object property with a key or index that TypeScript can't guarantee exists, TypeScript will assume that the result might be `undefined`.

Here's an example. Let's say you have the following array:

```typescript
let arr = ["hello", "world"];
```

Normally, TypeScript would let you access any index without complaint:

```typescript
let first = arr[0];  // Type is string.
let outOfBounds = arr[3];  // Type is string, even though it doesn't exist.
```

But with `"noUncheckedIndexedAccess": true`, TypeScript is more careful:

```typescript
let first = arr[0];  // Type is string | undefined.
let outOfBounds = arr[3];  // Type is string | undefined.
```

This helps prevent errors where you assume that an index or key exists when it doesn't. Now, if you want to use the value safely, you need to handle the possibility that it might be `undefined`:

```typescript
let first = arr[0];
if (first !== undefined) {
  console.log(first.toUpperCase());  // Safe because we checked for undefined.
}
```

This option can be particularly useful when dealing with objects:

```typescript
let obj = { a: 1, b: 2 };
let maybeExists = obj['c'];  // Type is number | undefined.
```

Overall, the `noUncheckedIndexedAccess` option adds an extra layer of type safety to your TypeScript code, helping to prevent runtime errors. It might require a bit more typing to handle potential `undefined` values, but it's usually worth it for the extra confidence in your code's correctness.

---

## 🎯 So, let's try it live! [Go in the ts file](./no-unchecked-indexed-access.ts).

Add `noUncheckedIndexedAccess` option in [tsconfig.json](../../tsconfig.json)
