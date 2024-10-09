/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import BookCard from "./BookCard";
import "./Books.css";
const Books = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default Books;
