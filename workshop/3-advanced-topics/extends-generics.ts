// 📎 Reference:
// Youtube - Matt Pocock - Using EXTENDS to constrain generics - Advanced TypeScript
// https://www.youtube.com/watch?v=xZ8BBBdMwQI

export const getDeepValue = <Object_, FirstKey, SecondKey>(object_: Object_, firstKey: FirstKey, secondKey: SecondKey) => ({} as any);

const object = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: 'cool',
    d: 2,
  },
};

const result = getDeepValue(object);
