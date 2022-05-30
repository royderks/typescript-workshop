// Enum numbers
enum Count {
  One,
  Two,
  Three,
  Four,
}

function counter(input: number) {
  if (input === Count.Three) {
    return true;
  }
  return false;
}

console.log(counter(0)); // Which value returns true?

// Enum strings
enum Options {
  First = 'first',
  Second = 'second',
  Third = 'third',
}

function options(input: string) {
  if (input === Options.Second) {
    return true;
  }
  return false;
}

console.log(options('')); // Which value returns true?
