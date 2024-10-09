import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Routes>
        <Route path="/" element={<h1>Books</h1>} />
        <Route path="/books" element={<h1>Books</h1>} />
        <Route path="/books:id" element={<h1>Single Books</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </>
  );
}

export default App;
