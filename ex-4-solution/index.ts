function calculation(array: number[]) {
  const result = array.map((x) => x * x);

  return result;
}

console.log(calculation([1, 2, 4, 6, 8, 10]));
