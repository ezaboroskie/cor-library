import { useState } from "react"

const NewShelfForm = ({ addShelf }) => {
    const [genre, setGenre] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addShelf({ genre, books: [] });
      setGenre('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <button type="submit">Add Shelf</button>
      </form>
    );
  };

export default NewShelfForm