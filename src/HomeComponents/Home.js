import axios from "axios";
import React, { useEffect, useState } from "react";
import Bloglist from "../BlogLIst/Bloglist";
import useFetch from "../useFetch";

const Home = () => {
  const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs");   //making useFetch as a custom hooks

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div> is Loading... </div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
