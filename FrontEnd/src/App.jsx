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
import SeatSelection from "./components/pages/SeatSelection";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context
import { UserProvider } from "./context/UserContext";
import MovieDetailNot from "./components/pages/MovieDetailNot";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <ToastContainer autoClose={4000} position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seat-selection/:id" element={<SeatSelection />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/notmovie/:id" element={<MovieDetailNot />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
