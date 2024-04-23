import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="min-h-[100vh] overflow-hidden">
            <div className="container | max-container flex flex-col justify-between min-h-[100vh]">
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
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
