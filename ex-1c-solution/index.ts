// Function that takes another function as input
function greetings(input: (a: string) => void) {
  input('Hello World');
}

function print(a: string) {
  console.log(a);
}

greetings(print);

// Function with different input types
const createSentence = (
  who: string,
  does: string,
  ...objects: string[]
) => {
  return who + ' ' + does + ' ' + objects
};

console.log(createSentence('my son', 'ate', 'muffins', 'fruit', 'pancakes'));
console.log(createSentence('my son', 'slept', 'all day'));
console.log(createSentence('my son', 'sneezed'));


