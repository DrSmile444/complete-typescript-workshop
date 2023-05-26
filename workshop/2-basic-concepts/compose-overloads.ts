// 📎 Reference:
// Youtube - Matt Pocock - Master FUNCTION OVERLOADS with 'compose' - Advanced TypeScript
// https://www.youtube.com/watch?v=D1a8OoBWi1g

export function compose(...args: any[]) {
    return {} as any;
}

const addOne = (number: number) => number + 1;
const numToString = (number: number) => number.toString();
const stringToNum = (string: string) => Number.parseInt(string);

const addOneToString = compose(addOne, numToString, stringToNum);
