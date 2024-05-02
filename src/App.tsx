import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import PostsByCategory from "./pages/PostsByCategory";
import PostsPopular from "./pages/PostsPopular";
import PostsLatest from "./pages/PostsLatest";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="min-h-[100vh] overflow-hidden">
            <div className="container | max-container flex flex-col justify-between min-h-[100vh]">
              <Navbar search={search} setSearch={setSearch}></Navbar>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage search={search} setSearch={setSearch} />}
                ></Route>
                <Route path="/posts/:id" element={<PostPage />}></Route>
                <Route path="/categories" element={<PostsByCategory />}></Route>
                <Route path="/popular" element={<PostsPopular />}></Route>
                <Route path="/latest" element={<PostsLatest />}></Route>
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
