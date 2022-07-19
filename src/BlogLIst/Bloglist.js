import React from "react";
import { NavLink } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  //object destructing
  //    const blogs = props.blogs;

  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <NavLink to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
