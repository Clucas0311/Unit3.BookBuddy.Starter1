const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

/*TODO LOGIN /POST*/

/*TODO REGISTER /POST */

/*TODO ALL BOOKS /GET */
export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`);
    const result = await response.json();
    return result.books;
  } catch (error) {
    console.error("There was an error fetching all books", error);
  }
};

/*TODO SINGLE BOOKS /GET */
