import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login.jsx";
import Home from "./component/home/Home.jsx";
import Detail from "./component/post/PostDetail.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
