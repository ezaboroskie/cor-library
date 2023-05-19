import { useState } from "react";
import Shelf from "./Shelf";
import NewShelfForm from "./NewShelfForm";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";



const Library = () => {
  const [shelves, setShelves] = useState([
    {
      genre: 'Fiction',
      books: [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Beloved', author: 'Toni Morrison' },
        { title: 'The Color Purple', author: 'Alice Walker' },
      ],
    },
    {
      genre: 'Mystery',
      books: [
        { title: 'Gone Girl', author: 'Gillian Flynn' },
        { title: 'The Underground Railroad', author: 'Colson Whitehead' },
        { title: 'IQ', author: 'Joe Ide' },
        { title: 'Blacktop Wasteland', author: 'S. A. Cosby' },
      ],
    },
    {
      genre: 'Science Fiction',
      books: [
        { title: 'Kindred', author: 'Octavia Butler' },
        { title: 'Dawn', author: 'Octavia Butler' },
        { title: 'Parable of the Sower', author: 'Octavia Butler' },
        { title: 'Binti', author: 'Nnedi Okorafor' },
      ],
    },
    {
      genre: 'Fantasy',
      books: [
        { title: 'Children of Blood and Bone', author: 'Tomi Adeyemi' },
        { title: 'Akata Witch', author: 'Nnedi Okorafor' },
        { title: 'Black Leopard, Red Wolf', author: 'Marlon James' },
        { title: 'The Fifth Season', author: 'N. K. Jemisin' },
      ],
    },
  ])

  const addShelf = (newShelf) => {
    setShelves([...shelves, newShelf]);
  };
  const addBook = (book, shelfIndex) => {
    setShelves(shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return { ...shelf, books: [...shelf.books, book] };
      } else {
        return shelf;
      }
    }));
  };

  return (
    <BrowserRouter>
      <section>
        <NewShelfForm addShelf={addShelf} />
        {shelves.map((shelf, index) => (
          <div key={index}>
            <Link to={`/shelf/${shelf.genre.toLowerCase()}`}>{shelf.genre}</Link>
          </div>
        ))}
        <Routes>
          {shelves.map((shelf, index) => (
            <Route
              key={index}
              path={`/shelf/${shelf.genre.toLowerCase()}`}
              element={<Shelf genre={shelf.genre} books={shelf.books} addBook={(book) => addBook(book, index)} />}
            />
          ))}
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default Library