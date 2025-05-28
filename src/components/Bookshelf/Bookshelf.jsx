import { useState } from 'react';


const Bookshelf =() => {

    // state to store the list of books
  const [books, setBooks] = useState([]);

     // state to store the input values for a new book
  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      setBooks([...books, newBook]);
  
      setNewBook({
        title: '',
        author: ''
      });
    };


return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
  </div>
  <div className="bookCardsDiv">
  {books.map((book, index) => (
    <div key={index} className="book-card">
    <p><strong>Book Title: {book.title}</strong></p>
    <p>Author: <em>{book.author}</em></p>
  </div>
  ))}
</div>
</div>
)};

export default Bookshelf