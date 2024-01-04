import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import SearchR from "./pages/search/SearchR";
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<SignUp />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search/:query" element={<SearchR />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
