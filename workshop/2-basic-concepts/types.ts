// TypeScript introduces a variety of basic types that help us describe the shape and structure of our data.
// These include string, number, boolean, null, undefined, and symbol.
// We can also define array and tuple types for handling collections of data.

const str: string = 'Hello, TypeScript!';
const num: number = 42;
const bool: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;
const uniqueValue: symbol = Symbol('unique');

const numArray: number[] = [1, 2, 3];
const tuple: [string, number] = ['TypeScript', 2023];
