# 🏫 Classes

## 🎯 So, let's try it live! [Go in the ts file](./classes.ts).

## Defining Classes with Properties and Methods

TypeScript allows you to define classes with properties and methods, just like in other object-oriented programming languages.

```typescript
class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark(): void {
    console.log(`${this.name} says: Woof Woof!`);
  }
}

let dog = new Dog("Rex", 3);
dog.bark(); // Rex says: Woof Woof!
```

In this example, `Dog` class has two properties (`name` and `age`) and one method (`bark`).

## Access Modifiers: Public, Private, Protected

TypeScript supports three access modifiers for class properties and methods:

- `public`: accessible everywhere. This is the default.
- `private`: accessible only within the class that declares it.
- `protected`: accessible within the class that declares it and in subclasses.

```typescript
class Animal {
  public name: string;
  private age: number;
  protected isDomestic: boolean;

  constructor(name: string, age: number, isDomestic: boolean) {
    this.name = name;
    this.age = age;
    this.isDomestic = isDomestic;
  }
}
```

## Inheritance and Abstract Classes

TypeScript supports inheritance, which allows you to create a class that inherits properties and methods from another class.

```typescript
class Mammal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class Cat extends Mammal {
  meow(): void {
    console.log('Meow!');
  }
}

let cat = new Cat("Whiskers", 2);
cat.eat(); // Whiskers is eating.
cat.meow(); // Meow!
```

TypeScript also supports abstract classes, which are classes that can't be instantiated and are only meant to be extended.

```typescript
abstract class Bird {
  abstract makeSound(): void;

  fly(): void {
    console.log('I am flying');
  }
}

class Sparrow extends Bird {
  makeSound(): void {
    console.log('Chirp Chirp');
  }
}

let sparrow = new Sparrow();
sparrow.makeSound(); // Chirp Chirp
sparrow.fly(); // I am flying
```

## Understanding When to Use Class or Interface

In TypeScript, you can use interfaces to define the shape of an object. They are often used when you want to enforce that a certain structure is adhered to, such as with an object parameter in a function.

```typescript
interface Printable {
  print(): void;
}

class Document implements Printable {
  print(): void {
    console.log('Printing document...');
  }
}

function printDocument(printable: Printable) {
  printable.print();
}

printDocument(new Document()); // Printing document...
```

On the other hand, classes in TypeScript are used when you want to use object-oriented programming features like inheritance, encapsulation, polymorphism, and abstraction.

In general:

- Use interfaces when you want to define the structure of an object.
- Use classes when you need to manage complex data models or when you need to leverage OOP features.
