// Extend a type
type BaseObject = {
  text: string;
};

type ExtendedObject = BaseObject & {
  count: number;
};

const extendedObject = (input: ExtendedObject) => input.text + '' + input.count;

console.log(extendedObject({ text: 'hello world', count: 1 }));

// Extend an interface
interface BaseInterface {
  text: string;
}

interface ExtendedInterface extends BaseInterface {
  count: number;
}

const extendedInterface = (input: ExtendedInterface) =>
  input.text + '' + input.count;

console.log(extendedInterface({ text: 'hello world', count: 1 }));