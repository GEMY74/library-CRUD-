import React, { useEffect, useState } from "react";
import "./booklist.css";
import { Table } from "react-bootstrap";
import BookDataService from "../../services/book-services";

function BookList({ getBookId }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };

  return (
    <div className="table_container">
      <div className="table__btn">
        <button onClick={getBooks} className="refresh-btn">
          Refresh List
        </button>
        {/* <button className="delete-btn">Delete All</button> */}
      </div>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td className={doc.status === "Avilable" ? "av" : "notav"}>
                  {doc.status}
                </td>
                <td>
                  <button onClick={(e) => getBookId(doc.id)} className="edit">
                    Edit
                  </button>
                  <button
                    onClick={(e) => deleteHandler(doc.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {books.length === 0 && <h2 className="title">No Books To Show!</h2>}
    </div>
  );
}

export default BookList;
