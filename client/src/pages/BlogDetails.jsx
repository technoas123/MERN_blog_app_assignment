import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });

  }, [id]);

  if (loading) return <p>Loading blog details...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <article>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
        &larr; Back
      </button>
      <h2>{blog.title}</h2>
      <p><em>By {blog.author}</em></p>
      <div style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</div>
    </article>
  );
}

export default BlogDetails;
