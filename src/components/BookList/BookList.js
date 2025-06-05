import React from 'react';

function BookList({ books, onDeleteBook, onEditBook }) {
  if (books.length === 0) {
    return <p>Nenhum livro cadastrado.</p>;
  }

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> por {book.author} - {book.genre} ({book.date})
          <button onClick={() => onEditBook(book)}>Editar</button>
          <button onClick={() => onDeleteBook(book.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;