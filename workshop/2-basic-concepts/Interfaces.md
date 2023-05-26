# 🗺️ Interfaces

## 🎯 So, let's try it live! [Go in the ts file](./interfaces.ts).

## Defining Interfaces

In TypeScript, interfaces provide a way to define the structure and shape of an object. They allow you to specify the properties and their types that an object should have. Here's an example:

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 25,
};
```

In the above code snippet, we define an interface called `Person` with two properties: `name` of type `string` and `age` of type `number`. We then create an object `person` that conforms to the `Person` interface.

## Optional Properties

Sometimes, certain properties of an object may be optional. TypeScript allows you to denote optional properties in interfaces by adding a question mark `?` after the property name. Here's an example:

```typescript
interface Book {
  title: string;
  author: string;
  year?: number;
}

const book1: Book = {
  title: "The TypeScript Book",
  author: "John Doe",
};

const book2: Book = {
  title: "The JavaScript Book",
  author: "Jane Smith",
  year: 2022,
};
```

In the `Book` interface, the `year` property is marked as optional with the `?` symbol. This means that `book1` can be created without specifying the `year`, while `book2` includes the `year` property.

## Readonly Properties

Sometimes, you may want to specify that certain properties of an object should not be modified once they are assigned a value. TypeScript provides the `readonly` modifier for this purpose. Here's an example:

```typescript
interface Car {
  readonly make: string;
  readonly model: string;
}

const car: Car = {
  make: "Toyota",
  model: "Camry",
};

car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
```

In the `Car` interface, both `make` and `model` properties are marked as `readonly`, indicating that their values cannot be changed after assignment.

## Interface vs Type

TypeScript offers two main ways to define custom types: interfaces and types. While they are often used interchangeably, there are some nuanced differences between them. Here's a brief comparison:

- **Interfaces**: Primarily used for defining object shapes and structures. They can be extended, implemented, and merged. They are ideal for representing contracts or agreements.
- **Types**: More versatile and can represent not only object shapes but also union types, intersections, and more. They can be used with primitive types, tuples, and function types. They are well-suited for creating aliases for complex types.

The choice between interfaces and types depends on the specific use case and personal preference. In many cases, they can be used interchangeably.

By understanding and leveraging interfaces, optional properties, readonly properties, and the difference between interfaces and types, you will have a strong foundation in structuring and defining custom types in TypeScript.
