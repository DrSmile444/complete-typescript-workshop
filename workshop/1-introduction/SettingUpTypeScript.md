# 🔧 Setting up TypeScript

## 1. Create a new TypeScript project:

* Create a new directory and navigate to it:

  ```bash
  mkdir my-typescript-project
  cd my-typescript-project
  ```

* Initialize a new npm project and install TypeScript as a dependency:

  ```bash
  npm init -y
  npm install typescript --save-dev
  ```

## 2. Configuring tsconfig.json:

* Create a `tsconfig.json` file in the project root to configure TypeScript settings:

  ```json
  {
     "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
     },
     "include": ["src/**/*.ts"],
     "exclude": ["node_modules"]
  }
  ```

* This configuration sets the output JavaScript target to ES5, the module system to CommonJS, enables strict mode, and
  specifies that TypeScript files are located in the `src` directory.

## 3. Compiling TypeScript to JavaScript:

* Create a `src` directory and add a simple TypeScript file, e.g., `src/index.ts`:

  ```typescript
  const message: string = 'Hello, TypeScript!';
  console.log(message);
  ```

* Compile the TypeScript file to JavaScript using the TypeScript compiler:

  ```
  npx tsc
  ```

* The compiled JavaScript file, `src/index.js`, can now be executed in a JavaScript environment:

  ```bash
  node src/index.js
  ```
