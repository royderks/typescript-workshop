// Outputs value
function generics<Type>(input: Type) {
  return input;
}

console.log(generics(1));
console.log(generics('hello'));
console.log(generics(true));
console.log(generics([1, 2, 3]));

// Output array of values
function genericsArray<Type>(array: Type[] | Array<Type>) {
  return array;
}

console.log(genericsArray([1, 2, 4, 6, 8, 10]));
console.log(genericsArray(['one', 'two', 'three']));
console.log(genericsArray([1, 'two', true]));

// Generics with multiple input types
function genericsMulti<T, U>(a: T, b: U) {
  return { a, b };
}

console.log(genericsMulti('hello', 1));
console.log(genericsMulti(1, 'hello'));
console.log(genericsMulti(1, 2));

// Generics with constraint
type ExtendConstraint = {
  length: number;
};

function genericsConstraint<T, U extends { length: number } | ExtendConstraint>(
  a: T,
  b: U,
) {
  return a + ' ' + b.length;
}

console.log(genericsConstraint('hello', ['world']));
console.log(genericsConstraint('hello', 'world'));
