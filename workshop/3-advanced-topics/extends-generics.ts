// 📎 Reference:
// Youtube - Matt Pocock - Using EXTENDS to constrain generics - Advanced TypeScript
// https://www.youtube.com/watch?v=xZ8BBBdMwQI

export const getDeepValue = <Obj, FirstKey, SecondKey>(
    obj: Obj,
    firstKey: FirstKey,
    secondKey: SecondKey,
) => {
    return {} as any;
};

const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: 'cool',
        d: 2
    }
};

const result = getDeepValue(obj);
