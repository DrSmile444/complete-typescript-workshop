**Task: Sort Geometric Shapes by Area using TypeScript (Immutable Edition)**

In this exercise, you will be provided with an array of geometric shapes. This array will consist of both rectangles and circles. Rectangles will be represented as a tuple of two numbers (width and length), while circles will be represented as a single number (radius).

Your task is to create a TypeScript function named `sortByArea` that takes this array as input and returns a new array sorted in ascending order based on the area of the shapes. The function should treat the input array as immutable and should not modify it.

**Examples:**

typescript

```typescript
const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
const sortedArray = sortByArea(array); // => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
console.log(array !== sortedArray); // => true
```

**Hints:**

1.  To create a new array that is a copy of the original, you can use the array spread operator (`...`).

2.  The area of a rectangle can be calculated by multiplying its width and height.

3.  The area of a circle can be found using the formula `πr²` (pi times radius squared).

4.  TypeScript allows you to determine the type of an element using `typeof` and `instanceof`. This can help you distinguish between circles and rectangles.

5.  Create a helper function to calculate the area of each shape.

6.  Make use of TypeScript's ability to handle different types in the same array through union types.


---

**Starting Code:**

typescript

```typescript
/**
 * Define your time here instead of `unknown`
 * */
type Shape = unknown;

function sortByArea(shapes: Shape[]): Shape[] {
    // Your code goes here
}

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
const sortedArray = sortByArea(array); // => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
console.log(array !== sortedArray); // => true
```
