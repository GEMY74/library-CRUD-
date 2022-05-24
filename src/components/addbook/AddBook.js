import React, { useState, useEffect } from "react";
import "./addbook.css";
import BookDataService from "../../services/book-services";

function AddBook({ id, setBookId }) {
  const [status, setStatus] = useState("Avilable");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are required!" });
      return;
    }

    const newBook = {
      title,
      author,
      status,
    };

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  setTimeout(() => {
    setMessage("");
  }, 4000);

  return (
    <div className="form__container">
      {message?.msg && message.error === false && (
        <p className="added" style={{ backgroundColor: "green" }}>
          <i className="uil uil-multiply" onClick={() => setMessage("")}></i>
          {message?.msg}
        </p>
      )}

      {message?.msg && message.error === true && (
        <p className="alert">
          <i className="uil uil-multiply" onClick={() => setMessage("")}></i>
          {message?.msg}
        </p>
      )}

      <form>
        <div className="input">
          <label> B </label>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input">
          <label> A </label>
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="btn_1">
          <button
            className="avilable"
            onClick={(e) => {
              setStatus("Avilable");
            }}
            type="button"
          >
            Available
          </button>
          <button
            className="not"
            onClick={(e) => {
              setStatus("Not Avilable");
            }}
            type="button"
          >
            Not Available
          </button>
        </div>

        <div className="add__btn">
          <button type="Submit" onClick={handleSubmit} className="add">
            Add/ Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
