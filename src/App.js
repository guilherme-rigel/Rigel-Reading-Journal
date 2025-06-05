import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import './App.module.css';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    if (editingBook) {
      setBooks(books.map(b => b.id === editingBook.id ? { ...book, id: editingBook.id } : b));
      setEditingBook(null);
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Diário de Leitura</h1>
        <BookForm onAddBook={handleAddBook} editingBook={editingBook} />
        <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />
      </div>
    </div>
  );
}

export default App;