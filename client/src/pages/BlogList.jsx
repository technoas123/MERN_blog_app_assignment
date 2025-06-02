import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://mern-blog-app-backend-kog2.onrender.com')
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (blogs.length === 0) return <p>No blogs found.</p>;

  return (
    <div>
      {blogs.map(blog => (
        <div
          key={blog._id}
          className="blog-card"
          onClick={() => navigate(`/blog/${blog._id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if(e.key === 'Enter') navigate(`/blog/${blog._id}`); }}
        >
          <h3>{blog.title}</h3>
          <p>By {blog.author}</p>
          <p>{blog.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
