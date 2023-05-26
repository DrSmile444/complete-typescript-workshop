// TypeScript introduces a variety of basic types that help us describe the shape and structure of our data.
// These include string, number, boolean, null, undefined, and symbol.
// We can also define array and tuple types for handling collections of data.

const string = 'Hello, TypeScript!';
const number = 42;
const bool = true;
const nothing = null;
const notDefined = undefined;
const uniqueValue = Symbol('unique');

const numberArray: number[] = [1, 2, 3];
const tuple: [string, number] = ['TypeScript', 2023];
