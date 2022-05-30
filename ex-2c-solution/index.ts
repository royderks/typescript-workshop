// Iterate over object or interface
type Book = {
  title: string;
  author: string;
};

const objects: Book[] = [
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
  },
];

const iterateObject = (input: Book[]) => input;

console.log(iterateObject(objects));

// Iterate over extended object or interface with optional value
type Author = {
  firstname: string;
  lastname: string;
};

type ExtendedAuthor = {
  middlename?: string;
} & Author;

const authors: ExtendedAuthor[] = [
  {
    firstname: 'George',
    lastname: 'Orwell',
  },
  {
    firstname: 'Joanne',
    middlename: 'K',
    lastname: 'Rowling',
  },
];

const iterateObjectWithoutOptional = (input: Author) => input;
const iterateObjectWithOptional = ({
  firstname,
  middlename,
  lastname,
}: ExtendedAuthor) => ({
  firstname,
  middlename,
  lastname,
});

console.log(iterateObjectWithoutOptional(authors[0]));
console.log(iterateObjectWithOptional(authors[1]));
