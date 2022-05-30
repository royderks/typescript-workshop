// Enum numbers
enum Numeric {
  One = 1,
  Two = 2,
  Three = 6,
}

function numeric(input: Numeric) {
  if (input === Numeric.Three) {
    return true;
  }
  return false;
}

console.log(numeric(0)); // Which value returns true?

// Generic as function type
interface NameAgePerson<T, U> {
  (key: T, val: U): void;
}

function namePlusAge<T, U>(name: T, age: U) {
  return `I'm ${name}, aged ${age}`;
}

console.log(namePlusAge("John Doe", 39))

let asNumbers: NameAgePerson<string, number> = namePlusAge;
console.log(asNumbers("John Doe", 39))

let asStrings: NameAgePerson<string, string> = namePlusAge;
console.log(asNumbers("John Doe", 39))