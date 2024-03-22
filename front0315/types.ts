export type Book = {
    _id: string,
    name: string,
}

export type BookResponse = {
    books: Book[],
}