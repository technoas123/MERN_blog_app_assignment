import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BlogList from './pages/BlogList.jsx';
import AddBlog from './pages/AddBlog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end style={({isActive}) => ({backgroundColor: isActive ? '#535bf2' : 'transparent'})}>
        All Blogs
      </NavLink>
      <NavLink to="/add" style={({isActive}) => ({backgroundColor: isActive ? '#535bf2' : 'transparent'})}>
        Add Blog
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <h1>MERN Blog App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
