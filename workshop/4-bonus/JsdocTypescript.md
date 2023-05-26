# 🤝 JSDOC + TypeScript

JSDoc is a popular API documentation tool for JavaScript. TypeScript is a strict syntactical superset of JavaScript that adds optional static typing. Together, they provide a powerful set of tools for creating well-documented, type-safe code.

## Use TypeScript file with interfaces with files written in JavaScript

The beauty of TypeScript is that it can be gradually adopted in a JavaScript codebase. You can start by creating a TypeScript file with interfaces. Then, you can reference these interfaces from your JavaScript files using JSDoc comments.

First, let's define a TypeScript interface:

```typescript
// types.ts
export interface User {
    name: string;
    age: number;
}
```

Then, you can use JSDoc comments in your JavaScript file to type your objects using the `User` interface:

```javascript
// user.js
import { User } from './types.ts';

/** @type {User} */
const user = {
    name: 'John',
    age: 30
};
```

In this example, `user` will be typed according to the `User` interface from the TypeScript file.

Remember to enable the `checkJs` and `allowJs` options in your `tsconfig.json` file. This tells TypeScript to type check and include JavaScript files in your project.

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        // other options...
    }
}
```

By using TypeScript and JSDoc together, you can gradually introduce static typing in your JavaScript projects. This can help you catch errors early, make your code more self-documenting, and improve your developer experience with enhanced autocompletion and type checking in your editor.
