// Output number
const add = (x: number, y: number) => x + y

console.log(add(1, 2))

// Output number
function sum(x: number, y: number = 2) { 
  return x + y 
}

console.log(sum(1, 2))
console.log(sum(1))

// Output array of numbers
function calc(array: number[] | Array<number>) {
    const result = array.map((x) => x * x);
    return result;
}

console.log(calc([1, 2, 4, 6, 8, 10]));

// Output string
function hello(a: string, b: number) { 
  return a + " " + b.toString()
}

console.log(hello("hello", 1))

// Output number
function count(a: string, b: string) { 
  return a.length + b.length
}

console.log(count("hello", "world"))

// Output number or null
function countConditional(a: string, b: string): number | null { 
  if (b.length > 5) {
    return null
  }

  return a.length + b.length
}

console.log(countConditional("hello", "world"))
console.log(countConditional("hello", "worlds"))