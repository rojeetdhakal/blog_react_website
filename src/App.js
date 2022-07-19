import Home from "./HomeComponents/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./HomeComponents/Create";
import BlogDetails from "./HomeComponents/BlogDetails";
import NotFound from "./HomeComponents/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/create" element={<Create/>}> </Route>
            <Route path="/blogs/:id" element={<BlogDetails/>}> </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
