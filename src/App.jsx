import React, { useState } from "react";
import "./App.css";
import Book from "./Components/Book.jsx";
import data from "../data/books.json";
import AddBookModal from "./Components/AddBookModal";

console.log(data);

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [books, setBooks] = useState(data);

    const handleRemove = (title) => {
        setBooks((prevBooks) =>
            prevBooks.filter((book) => book.title !== title)
        );
    };

    return (
        <div id='app-container'>
            <div className={`app-content ${isModalOpen ? "blur" : ""}`}>
                <header>
                    <h1>Reagan Book Catalog</h1>
                </header>

                <main className='content'>
                    <button
                        className='add-button'
                        onClick={() => setIsModalOpen(true)}>
                        + Add
                    </button>
                    <div className='books-container'>
                        {books.map((book) => (
                            <Book
                                key={book.title}
                                image={book.image}
                                title={book.title}
                                price={book.price}
                                link={book.url}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                </main>

                <footer>
                    <p>© 2025 Reagan Book Catalog</p>
                </footer>
            </div>

            {isModalOpen && (
                <AddBookModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default App;
