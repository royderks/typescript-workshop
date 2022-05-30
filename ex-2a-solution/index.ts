// Output an object string
type MyObject = {
  // Type Aliases
  text: string;
};

const object = (input: { text: string } | MyObject) => input.text;

console.log(object({ text: 'hello world' }));

// Output an object string
interface MyInterface {
  text: string;
}

const interface = (input: { text: string } | MyInterface) => input.text;

console.log(interface({ text: 'hello world' }));

// Output a nested object string
interface NestedInterface {
  // Type Aliases
  nested: MyInterface;
}

const nestedInterface = (
  input: { nested: { text: string } } | NestedInterface,
) => input.nested.text;

console.log(nestedInterface({ nested: { text: 'world' } }));
