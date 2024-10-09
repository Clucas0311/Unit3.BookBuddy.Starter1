import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route } from "react-router-dom";
import { fetchAllBooks } from "./api";
import Books from "./components/Books";
function App() {
  const [token, setToken] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await fetchAllBooks();
      setBooks(books);
    };
    getAllBooks();
  }, []);
  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Routes>
        <Route path="/" element={<Books books={books} />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books:id" element={<h1>Single Books</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </>
  );
}

export default App;
