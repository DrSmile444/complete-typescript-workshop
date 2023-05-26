// 📎 Reference:
// Youtube - Matt Pocock - The SECRET POWER of indexed access types - Advanced TypeScript
// https://www.youtube.com/watch?v=plsnFfbqVEo

// Get one key
interface Colors {
  primary: 'blue';
  secondary: 'yellow';
}

type PrimaryType = unknown;

// Get all keys from array

const letters = ['a', 'b', 'c'];

type EveryLetter = unknown;

// Get nested types

const userRoleConfig = {
  user: ['view'],
  admin: ['view', 'edit', 'delete'],
};
