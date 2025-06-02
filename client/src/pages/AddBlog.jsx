import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title || !author || !content) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/blogs', { title, author, content });
      navigate('/');
    } catch (err) {
      setError('Failed to add blog. Try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Enter author name"
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        rows="8"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write your blog content here..."
      />

      <button type="submit">Add Blog</button>
    </form>
  );
}

export default AddBlog;
