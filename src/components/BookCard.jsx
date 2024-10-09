import React from "react";
import "./BookCard.css";
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverimage} alt={book.title} />
      <div className="info">
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
        <p className={book.available ? "available" : "not-available"}>
          {book.available ? "Available" : "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
