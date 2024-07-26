// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Search from "./components/pages/Search";
import MovieDetail from "./components/pages/MovieDetail";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer autoClose={3000} position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
