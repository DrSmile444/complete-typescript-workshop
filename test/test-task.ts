/**
 * Define your time here instead of `unknown`
 * */
type Shape = unknown;

function sortByArea(shapes: Shape[]): Shape[] {
  // Your code goes here
}

const array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]; // [ rectangle, circle, circle, rectangle ]
const sortedArray = sortByArea(array); // => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
console.log(array !== sortedArray); // => true
