# 🔍 What is index.ts

## 🎯 So, let's try it live! [Go in the ts file](./index.ts).

The `index.ts` file in TypeScript is primarily used to expose parts of a module from a more simplified API surface or entry point. It allows you to import several related functionalities from a single import statement rather than from multiple import statements, which can greatly improve the readability of your code.

## Here is an example to illustrate this:

Imagine you have a `models` folder containing several TypeScript files:

```
/models
  User.ts
  Product.ts
  Order.ts
```

Each file exports a class:

`User.ts`
```typescript
export class User {}
```

`Product.ts`
```typescript
export class Product {}
```

`Order.ts`
```typescript
export class Order {}
```

You can create an `index.ts` file in the `models` folder to re-export all these classes:

`index.ts`
```typescript
export * from './User';
export * from './Product';
export * from './Order';
```

Then, when you need to import these classes, you can do so with a single import statement:

```typescript
import { User, Product, Order } from './models';
```

Without the `index.ts` file, you would need to import each class individually:

```typescript
import { User } from './models/User';
import { Product } from './models/Product';
import { Order } from './models/Order';
```

While `index.ts` is great for simplifying the public API of your modules and for making imports more concise, it can also cause circular dependency issues if not managed carefully. This can happen if module A exports something that module B uses, and module B also exports something that module A uses.

Furthermore, an `index.ts` can potentially expose parts of your codebase that you intended to keep private. For example, if there are modules within a folder that are meant to be internal utilities, but an `index.ts` file exports everything in the folder, those internal utilities can be inadvertently exposed.

## In summary, you should use `index.ts` files when:

- You want to simplify the public API of your modules.
- You want to make your import statements more concise.

## You should avoid `index.ts` files when:

- There's a risk of circular dependency issues.
- You need to ensure some parts of your codebase remain private.
