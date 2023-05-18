# 📐 Sort Geometric Shapes by Area using TypeScript (Immutable Edition)

## 📖 Table of Contents

  - [📜 Intro](#-intro)
  - [💡 Examples](#-examples)
  - [🕵️‍♀️ Hints](#️️-hints)
  - [💻 Starting Code](#-starting-code)
  - [✉️ Submission Instructions](#️-submission-instructions)

## 📜 Intro

In this exercise, you will be provided with an array of geometric shapes. This array will consist of both rectangles and circles. Rectangles will be represented as a tuple of two numbers (width and length), while circles will be represented as a single number (radius).

Your task is to create a TypeScript function named `sortByArea` that takes this array as input and returns a new array sorted in ascending order based on the area of the shapes. The function should treat the input array as immutable and should not modify it.

## 💡 Examples

typescript

```typescript
const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
const sortedArray = sortByArea(array); // => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
console.log(array !== sortedArray); // => true
```

## 🕵️‍♀️ Hints

1.  To create a new array that is a copy of the original, you can use the array spread operator (`...`).

2.  The area of a rectangle can be calculated by multiplying its width and height.

3.  The area of a circle can be found using the formula `πr²` (pi times radius squared).

4.  TypeScript allows you to determine the type of an element using `typeof` and `instanceof`. This can help you distinguish between circles and rectangles.

5.  Create a helper function to calculate the area of each shape.

6.  Make use of TypeScript's ability to handle different types in the same array through union types.


---

## 💻 Starting Code

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

## ✉️ Submission Instructions

To submit your completed test work, please follow the steps below:

1. Create a **gist** on GitHub with your completed task. If you're not familiar with gists, here's how to create one:
  - Go to [https://gist.github.com](https://gist.github.com) and sign in to your GitHub account or create a new account if you don't have one.
  - Click on the **New gist** button.
  - In the **Filename** field, provide a descriptive name for your gist.
  - Paste the contents of your completed task into the **Gist description** field.
  - Optionally, you can add additional files or modify the **Gist filename extensions** as needed.
  - Once you're ready, click on the **Create secret gist** button.

2. After creating the gist, copy the URL of the gist page from your browser's address bar.

3. Open the **Google Form** for test work submission by clicking on the following link: [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfxswHl5hr61PN1hd0w_RNbzDXfuin_NjLeb92TXDLRVb8Y7A/viewform?fbclid=PAAaZ2LgH4N3ltCEKLkgdMRwd9OGTX5MtzhDQqidcX5TLOdK-VhpsZfIKQaOQ).

4. Fill out the required information in the Google Form, including your name, email address, and any other details requested.

5. In the designated field for the task submission, paste the URL of your gist that you copied earlier.

6. Once you have filled out the form and verified that all the information is correct, click on the **Submit** button to complete the submission.

Thank you for completing the test work. If you have any questions or need further assistance, please feel free to reach out to us.

Best regards, Dmytro Vakulenko ❤️

Masters Academy, Master of Code Global 2023
