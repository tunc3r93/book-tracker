import { useState } from "react";
import "./Home.css";

function Home() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", rating: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.rating) return;
    setBooks([...books, { ...form }]);
    setForm({ title: "", author: "", rating: "" });
  };

  return (
    <main className="home-container">
      <form onSubmit={handleSubmit} className="home-form">
        <input
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />
        <input
          name="rating"
          placeholder="Rating (1–5)"
          value={form.rating}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>

      <ul className="home-list">
        {books.map((book, i) => (
          <li key={i}>
            <strong>{book.title}</strong> by {book.author} – Rating:{" "}
            {book.rating}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
