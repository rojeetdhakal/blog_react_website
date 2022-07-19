import React, { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mr Dhakal");
  const[isPending,setisPending]=useState(false)
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setisPending(true)
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(blog),
    }).then(()=>{
      console.log("new blog Added")
      setisPending(false)
      navigate('/')``
    })
  };

  return (
    <div>
      <div className="create">
        <h2>Add a New Blog</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">blogs name</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">blogs body</label>
          <textarea
            name=""
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label htmlFor="">blogs author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Mr Dhakal">Mr Dhakal </option>
            <option value="Mr nagarkoti">Mr Nagarkoti </option>
          </select>

          {!isPending && <button> Add blog</button>}
          {isPending && <button disabled> adding blog...</button>}
          
        </form>
      </div>
    </div>
  );
};

export default Create;
