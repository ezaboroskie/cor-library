import Book from "./Book"
import NewBookForm from "./NewBookForm"

const Shelf = ({ genre, books, addBook }) => {
    

    return (
        <section>
            <h1>{ genre }</h1>
            <NewBookForm addBook={addBook} />
            <section>
                {
                    books.map((book, index) => <Book key={index} title={book.title} author={book.author}/>)
                } 
            </section>
            <hr />
        </section>
    )
}

export default Shelf