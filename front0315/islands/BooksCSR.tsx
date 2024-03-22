import {FunctionComponent} from "preact"
import {BooksResponse} from "../types.ts"
import {useState} from "preact/hooks"
import Books from "../components/books.tsx"

const BooksCSR: FunctionComponent = () => {
    
    const [books, setBooks] = useState<BooksResponse|undefined>(undefined);

    const fetchBooks = async () => {
        const response = await fetch("/api/lotr")
        const data:BooksResponse = await response.json()
        setBooks(data)
    }

    return(
        <>
            <div><button onCLick={fetchBooks}>Pedir libros</button></div>
            {books && <Books docs={books.docs}/>}
        </>
    )
}

export default BooksCSR;