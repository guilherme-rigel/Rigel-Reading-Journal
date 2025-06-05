import React, { useState, useEffect } from 'react';

function BookForm({ onAddBook, editingBook }) {
  const [formData, setFormData] = useState({ title: '', author: '', genre: '', date: '' });

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.genre || !formData.date) {
      alert("Preencha todos os campos!");
      return;
    }
    onAddBook(formData);
    setFormData({ title: '', author: '', genre: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} />
      <input type="text" name="author" placeholder="Autor(a)" value={formData.author} onChange={handleChange} />
      <input type="text" name="genre" placeholder="Gênero" value={formData.genre} onChange={handleChange} />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <button type="submit">{editingBook ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

export default BookForm;