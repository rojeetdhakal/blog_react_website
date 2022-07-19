import React, { useState } from "react";

const Addblogs = () => {
  const [blogs, setBlogs] = useState({
    name: "",
    body: "",
    author: "Mr Dhakal",
  });
  const handleChange = (e) => {
    setBlogs({...blogs,[e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <>
      <div>
        <form action="">
          <div>
            <h1>Add Blogs</h1>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Name</label>
              <input
              required
                type="text"
                name="name"
                value={blogs.name}
                onChange={handleChange}
              />

              <label htmlFor="">Body</label>
              <textarea
              required
                name="body"
                value={blogs.body}
                onChange={handleChange}
              ></textarea>

              <label htmlFor="">author</label>
              <select
                name="author"
                value={blogs.author}
                onChange={handleChange}
              >
                <option value="Mr Dhakal"> Mr Dhakal</option>
                <option value="Mr  Nagarkoti"> Mr Nagarkoti</option>
              </select>


              <button type="submit"> Add Blogs</button>

              {/* <p>{blogs.name}</p>
              <p>{blogs.body}</p>
              <p>{blogs.author}</p> */}
            </form>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addblogs;
